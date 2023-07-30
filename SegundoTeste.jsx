import React, { useEffect, useState } from 'react'
import { Button, Text } from 'react-native'
import PrimeiroTeste from './PrimeiroTeste'
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './reducers/counterSlice';

const SegundoTeste = () => {
  const texto = "SegundoTeste";
  const dispatch = useDispatch()
  const counter = useSelector((state) => state.counter.value)

  useEffect(() => {
  }, [counter])

  return (
    <>
      <PrimeiroTeste texto="Primeiro"/>
      <Text style={{fontSize: 80}}>{counter}</Text>
      <Button title='Incrementa' onPress={() => dispatch(increment()) } />
      <Button title='Decrementa' onPress={() => dispatch(decrement()) } />
    </>
  )
}

export default SegundoTeste