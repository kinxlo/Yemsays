/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from '@chakra-ui/react'
import { Link as ReactLink } from 'react-router-dom'

const LinkButton = ({ width, height, to, text }) => {
  return (
    <Link
      to={to}
      as={ReactLink}
      width={width}
      height={height}
      bg='primary'
      color='white'
      borderRadius={`8px`}
    >
      {text}
    </Link>
  )
}

export default LinkButton
