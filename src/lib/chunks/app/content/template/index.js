import servableConfig from './mastermail.config.js'
import { launch } from "@mastermail/server"
import engine from "@mastermail/parse-server-engine"

await launch({ servableConfig, engine })
