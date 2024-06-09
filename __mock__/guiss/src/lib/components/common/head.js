import {
  Head
} from "@react-email/components"

import * as React from "react"

export default (props) =>
  <Head {...props}>{props.children}</Head>