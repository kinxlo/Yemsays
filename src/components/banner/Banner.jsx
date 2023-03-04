import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const Banner = () => {
  // the values displayed on the bannner would be coming from the database , showing a summary of the sales of properties
  return (
    <Box
      color={`black`}
      bgImage={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1677765829/project-yemsays/unsplash_75xPHEQBmvA_izjdww.png`}
      bgRepeat={`no-repeat`}
      bgSize={`cover`}
      bgPos={`center`}
      display={`flex`}
      justifyContent={`space-evenly`}
      alignItems={`center`}
      width={`100%`}
      height={`228px`}
    >
      <Box textAlign={`center`}>
        <Text fontWeight={`bold`} fontSize={`5xl`} color={`primary`}>
          2349
        </Text>
        <Text fontSize={`xl`} fontWeight={`bold`}>
          Homes for sale
        </Text>
      </Box>
      <Box textAlign={`center`}>
        <Text fontWeight={`bold`} fontSize={`5xl`} color={`primary`}>
          2349
        </Text>
        <Text fontSize={`xl`} fontWeight={`bold`}>
          Homes for sale
        </Text>
      </Box>
      <Box textAlign={`center`}>
        <Text fontWeight={`bold`} fontSize={`5xl`} color={`primary`}>
          2349
        </Text>
        <Text fontSize={`xl`} fontWeight={`bold`}>
          Homes for sale
        </Text>
      </Box>
      <Box textAlign={`center`}>
        <Text fontWeight={`bold`} fontSize={`5xl`} color={`primary`}>
          2349
        </Text>
        <Text fontSize={`xl`} fontWeight={`bold`}>
          Homes for sale
        </Text>
      </Box>
    </Box>
  )
}

export default Banner
