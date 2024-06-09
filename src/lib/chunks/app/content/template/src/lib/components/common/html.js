import {
  Html
} from "@react-email/components"

import * as React from "react"

export default (props) =>
  <Html {...props}>{props.children}</Html>