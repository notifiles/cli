import {
  Body
} from "@react-email/components"

import * as React from "react"

export default (props) =>
  <Body {...props}>{props.children}</Body>