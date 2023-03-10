import React from 'react'

// Chakra imports
import { Center, Flex, Image } from '@chakra-ui/react'

// Custom components
// import { HorizonLogo } from 'components/icons/Icons'
// import { HSeparator } from 'components/separator/Separator'

export function SidebarBrand() {
  //   Chakra color mode

  return (
    <Center align='center' direction='column'>
      <Image
        src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1677576945/project-yemsays/Group_86_btjv9i.png`}
      />
    </Center>
  )
}

export default SidebarBrand
