import {
  Button
} from "@react-email/components"

import * as React from "react"

export default (props) => <Button style={button} {...props}>{props.children}</Button>

const button = {
  backgroundColor: "#efefef",
  borderRadius: "30px",
  color: "#656565",
  fontSize: "14px",
  fontWeight: "bold",
  textDecoration: "none",
  textAlign: "center",
  display: "block",
  width: "100%",
  padding: "15px",
}
