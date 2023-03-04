import { Box, Card, Text } from '@chakra-ui/react'
import React from 'react'

// eslint-disable-next-line react/prop-types
const Tag = ({ bgColor, color, text, children }) => {
  return (
    <Card
      bgColor={bgColor}
      color={color}
      width={`fit-content`}
      py={1}
      px={3}
      display={`flex`}
      flexDir={`row`}
      alignItems={`start`}
      justifyContent={`end`}
      gap={2}
    >
      <Box width={`fit-content`}>{children}</Box>
      <Text width={`fit-content`} fontSize={`sm`}>
        {text}
      </Text>
    </Card>
  )
}

export default Tag
