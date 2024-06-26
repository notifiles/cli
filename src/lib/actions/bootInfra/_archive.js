/*---------------------------------------------------------
 * Copyright (C) notifiles Community. All rights reserved.
 *--------------------------------------------------------*/

export default async (props) => {

    const { toolbox, payload, options: { force = false } = {} } = props
    if (!force && !payload.launchLocalInfraDocker) {
        return
    }

    toolbox.fs.copyTpl(toolbox.templatePath('.system/app/docker/docker-compose.yaml'), toolbox.destinationPath('.system/app/docker/docker-compose.yaml'), payload);
    toolbox.fs.copy(toolbox.templatePath('.system/app/docker/data'), toolbox.destinationPath('.system/app/docker/data'))
    // toolbox.fs.copyTpl(toolbox.templatePath('.system/README.md'), toolbox.destinationPath('.system/README.md'), payload)
    // toolbox.fs.copyTpl(toolbox.templatePath('.system/CHANGELOG.md'), toolbox.destinationPath('.system/CHANGELOG.md'), payload)
    toolbox.fs.copy(toolbox.templatePath('.system/app/docker/gitignore'), toolbox.destinationPath('.system/app/docker/.gitignore'));

    switch (payload.appDistributionType) {
        case 'distributed': {
            // if (!toolbox.fs.exists(this.destinationPath('${toolbox.destinationPath()}/.system/data/utils-mongo/replica.key'))) {
            toolbox.spawn('bash', ['-c', `openssl rand -base64 741 > ${toolbox.destinationPath()}/.system/app/docker/data/utils-mongo/replica.key`])
            toolbox.spawn('bash', ['-c', `chmod 600 ${toolbox.destinationPath()}/.system/app/docker/data/utils-mongo/replica.key`])
            // }
        } break
        default:
            break
    }

    const launchDocker = payload.launchDocker
    if (launchDocker) {
        toolbox.spawn('bash', ['-c', `docker compose --project-name ${payload.appId} -f ${toolbox.destinationPath()}/.system/app/docker/docker-compose.yaml up -d --remove-orphans`])
    }
}
