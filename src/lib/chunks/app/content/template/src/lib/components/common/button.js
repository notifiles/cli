import {
  Button
} from "@react-email/components"

import * as React from "react"

export default (props) => <Button style={button} {...props}>{props.children}</Button>

const button = {
  backgroundColor: "#e76f51",
  borderRadius: "5px",
  color: "#fff",
  fontSize: "16px",
  fontWeight: "bold",
  textDecoration: "none",
  textAlign: "center",
  display: "block",
  width: "100%",
  padding: "15px",
}
