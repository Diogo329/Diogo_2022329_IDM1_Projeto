import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'

const Historico = ({ route }) => {
  const { historico } = route.params;
  console.log('Historico:', historico); // Check if historico is being passed correctly

  if (historico.length === 0) {
    console.log('Historico is empty.'); // Check if the array is empty
    return (
      <Text>No winners in the history yet.</Text>
    );
  }

  return (
    <>
      <Text>Historico:</Text>
      {historico.map((winner, index) => (
        <Text key={index}>{winner}</Text>
      ))}
    </>
  );
}

Historico.propTypes = {
  route: PropTypes.object.isRequired,
};


export default Historico