import {
  Box,
  Button,
  FormControl,
  Heading,
  Input,
  Text,
} from '@chakra-ui/react'
import React from 'react'

const QuestionBanner = () => {
  return (
    <Box
      display={`flex`}
      flexDir={{ base: `column`, md: `row` }}
      bgColor={`primary`}
      //   h={`198px`}
      borderRadius={`15px`}
      p={{ base: `30px`, md: `81px` }}
    >
      <Box flex={1}>
        <Heading fontSize={`3xl`}>Do you have any questions?</Heading>
        <Text>Enter your email address and get started</Text>
      </Box>
      <Box flex={1}>
        <FormControl
          display={`flex`}
          flexDir={{ base: `column`, md: `row` }}
          alignItems={`center`}
          // height={`66px`}
          bgColor={`white`}
          borderRadius={`lg`}
          px={3}
          py={3}
          gap={2}
        >
          <Input
            borderRadius={0}
            border={`none`}
            type='email'
            placeholder='Enter email address'
            color={`grey`}
          />
          <Button bgColor={`primary`} w={{ base: `100%`, md: `153px` }}>
            Continue
          </Button>
        </FormControl>
      </Box>
    </Box>
  )
}

export default QuestionBanner
