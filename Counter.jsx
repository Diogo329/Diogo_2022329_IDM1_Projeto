import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Button, Text } from 'react-native';

const Counter = props => {
  const [counter, setcounter] = useState(0);

  useEffect(() => {
    console.log("ENTROU AQUI!!!!!");
  }, [counter])

  const incrementa = () => {
    setcounter(counter+1);
  };

  return (
    <>
        <Text style={{fontSize: 70}}>{counter}</Text>
        <Button title='Decrementa' onPress={() => setcounter(counter-1)}/>
        <Button title='Incrementa'onPress={incrementa}/>
    </>
  )
}

Counter.propTypes = {}

export default Counter