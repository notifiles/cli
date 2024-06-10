import {
  Hr, Section, Text
} from "../common"
import * as React from "react"

export default () => <Section className={''}>
  <Hr />
  <Text className={'font-bold text-center content-center text-custom-color-second'}>The team</Text>
  <Text className={'text-center content-center text-xs'}>
    {`
    © 2024 Company
    `}
  </Text>
</Section>
