import React from 'react'
import Primeiro from './Primeiro'
import { Text } from 'react-native'

const Segundo = () => {
  const texto = "sou eu que defini";

  return (
    <>
        <Primeiro texto={texto}/>
        <Text>Segundo</Text>
    </>
  )
}

export default Segundo