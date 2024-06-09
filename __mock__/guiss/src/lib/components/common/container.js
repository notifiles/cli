import {
  Container
} from "@react-email/components"

import * as React from "react"

export default (props) =>
  <Container className={`
  px-10
  py-10
  bg-white`} {...props}>
    {props.children}</Container>
