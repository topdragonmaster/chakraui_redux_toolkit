import React from 'react'
import { Box, Text, Heading } from '@chakra-ui/react'

type Props = {
  label: string
  text: string
}

const LabelText: React.FC<Props> = ({ label, text }) => (
  <Box alignItems="baseline">
    <Heading size="md" textTransform="capitalize">
      {label}
    </Heading>
    <Text>{text}</Text>
  </Box>
)

export default LabelText
