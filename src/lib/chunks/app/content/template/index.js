import servableConfig from './notifiles.config.js'
import { launch } from "@notifiles/server"
import engine from "@notifiles/parse-server-engine"

await launch({ servableConfig, engine })
