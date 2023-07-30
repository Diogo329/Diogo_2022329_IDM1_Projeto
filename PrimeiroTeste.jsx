import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'

function PrimeiroTeste({ texto }) {
    return (
    <Text>{texto}</Text>
  )
}

PrimeiroTeste.defaultProps = {
    texto: "E o valor default",
}

PrimeiroTeste.propTypes = {
    texto: PropTypes.string,
}

export default PrimeiroTeste;