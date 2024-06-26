/*---------------------------------------------------------
 * Copyright (C) notifiles Community. All rights reserved.
 *--------------------------------------------------------*/

import drawSectionHeader from "../../lib/draw/drawSectionHeader.js"
import path from "path"
import chalk from "chalk"
import capitalizeFirstLetter from "../../lib/capitalizeFirstLetter.js"
import askForGeneric from "../utils/askForGeneric.js"
import featureSchemaOwnClasses from "./lib/featureSchemaOwnClasses.js"

export default async (props) => {
  const { generator, payload, options = {} } = props

  drawSectionHeader({
    generator,
    title: `Class informations 🚀`,
    subTitle: `notifiles required class informations.`
  })

  const ownClasses = await featureSchemaOwnClasses(payload.targetFeaturePath)

  const nameFromFolder = generator.options['destination'] ? path.basename(generator.destinationPath()) : ''

  await askForGeneric({
    ...props, options: {
      ...options,
      type: 'input',
      name: 'className',
      default: nameFromFolder,
      validate: (name,) => {
        const classNames = ownClasses.map(c => c.className.toLowerCase())
        if (classNames.includes(name.toLowerCase())) {
          generator.log(chalk.red(chalk.italic(`\n${name} class is already present.`)))
          return false
        }
        return true
      },
      transformer: (name,) => {
        if (!name) {
          return name
        }

        return capitalizeFirstLetter(name)
      }
    }
  })

  payload.className = capitalizeFirstLetter(payload.className)
  payload.classDescription = ''
}
