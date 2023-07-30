import React from 'react'
import { Text } from 'react-native'
import PropTypes from 'prop-types'

//propriedades do componente
const Primeiro = ({ texto }) => {
  return (
    <Text>{texto}</Text>
  )
}

/*
Primeiro.defaultProps = {
    texto: 'Este é o texto default',
}*/

Primeiro.PropTypes = {
    texto: PropTypes.string.isRequired,
}

export default Primeiro;