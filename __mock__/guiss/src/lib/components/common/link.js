import {
  Link
} from "@react-email/components"

import * as React from "react"

export default (props) => <Link style={anchor} {...props}>{props.children}</Link>

const anchor = {
  color: "#e76f51",
}