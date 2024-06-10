import { Tailwind } from "@react-email/components"
import * as React from "react"

import {
  Body,
  Container,
  Head,
  Html
} from "../common"

import {
  Preview
} from "@react-email/components"
import Header from "./header"
import Footer from "./footer"

export default (props) => {
  const { preview } = props
  return <Tailwind
    config={{
      theme: {
        extend: {
          colors: {
            'custom-color-main': '#e76f51',
            'custom-color-second': '#767676',
          },
        },
      },
    }}>
    <Html>
      <Head />
      {preview && <Preview>{preview}</Preview>}
      <Body>
        <Container>
          <Header />
          {props.children}
          <Footer />
        </Container>
      </Body>
    </Html>
  </Tailwind>
}
