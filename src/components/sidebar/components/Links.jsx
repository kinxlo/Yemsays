/* eslint-disable */
import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
// chakra imports
import { Box, Flex, HStack, Text, useColorModeValue } from '@chakra-ui/react'

export function SidebarLinks(props) {
  //   Chakra color mode
  let location = useLocation()

  const { routes } = props

  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return location.pathname.includes(routeName)
  }

  // this function creates the links from the secondary accordions (for example auth -> sign-in -> default)
  const createLinks = (routes) => {
    return routes.map((route, index) => {
      return (
        <NavLink key={index} to={route.layout + route.path}>
          {route.icon ? (
            <Flex w='100%' alignItems='center' justifyContent='center'>
              <Box
                color={activeRoute(route.path.toLowerCase()) ? null : null}
                me='18px'
              >
                {route.icon}
              </Box>
              <Text
                me='auto'
                color={activeRoute(route.path.toLowerCase()) ? null : null}
                fontWeight={
                  activeRoute(route.path.toLowerCase()) ? 'bold' : 'normal'
                }
              >
                {route.name}
              </Text>
            </Flex>
          ) : (
            <Box>
              <HStack
                spacing={
                  activeRoute(route.path.toLowerCase()) ? '22px' : '26px'
                }
                py='5px'
                ps='10px'
              >
                <Text
                  me='auto'
                  color={activeRoute(route.path.toLowerCase()) ? null : null}
                  fontWeight={
                    activeRoute(route.path.toLowerCase()) ? 'bold' : 'normal'
                  }
                >
                  {route.name}
                </Text>
                <Box h='36px' w='4px' bg='brand.400' borderRadius='5px' />
              </HStack>
            </Box>
          )}
        </NavLink>
      )
    })
  }
  //  BRAND
  return createLinks(routes)
}

export default SidebarLinks
