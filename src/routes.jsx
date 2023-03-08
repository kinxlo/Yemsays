import React from 'react'

import { Icon } from '@chakra-ui/react'
import { MdPerson } from 'react-icons/md'

const routes = [
  {
    name: 'dashboard',
    layout: '/admin',
    path: '/dashboard',
    icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
  },
]

export default routes
