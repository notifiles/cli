/*---------------------------------------------------------
 * Copyright (C) notifiles Community. All rights reserved.
 *--------------------------------------------------------*/

// import { validateFeature } from '@notifiles/tools'

export default async (props) => {
    const { toolbox, payload } = props
    const appPath = payload.desiredWriteDestinationPathAbsolute

    return { isValid: true, message: null }
    // try {
    //     const configPath = `${appPath}/notifiles.config.js`
    //     const servableConfig = (await import(configPath)).default
    //     // const servableConfig = JSON.parse(configRawdata)
    //     if (!servableConfig) {
    //         return
    //     }
    //     if (!servableConfig.features) {
    //         servableConfig.features = {}
    //     }
    //     servableConfig.features.local = [
    //         `${appPath}/lib/features`
    //         // path.resolve(__dirname, `./features`)
    //     ]
    //     servableConfig.rootFeaturePayload = {
    //         type: 'app',
    //         id: 'app',
    //         // path: path.resolve(__dirname, "./app")
    //         path: `${appPath}/lib/features`
    //     }

    //     const schema = await buildSchema({ servableConfig })
    //     return schema

    // } catch (e) {
    //     console.error(e)
    //     return null
    // }
}

