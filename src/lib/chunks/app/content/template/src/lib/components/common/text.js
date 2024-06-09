import {
  Text
} from "@react-email/components"

import React from "react"

export default (props) => <Text style={paragraph} {...props}>{props.children}</Text>

const paragraph = {
  color: "#121212",
  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "left",
}
