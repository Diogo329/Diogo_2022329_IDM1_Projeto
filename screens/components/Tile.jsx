import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Button, StyleSheet, Touchable, TouchableOpacity, View } from 'react-native'

const Tile = ({ch, setch, y, x}) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => {
    //if (!isPressed && ch === '') {
      // Only update "ch" and setIsPressed if the Tile is not already pressed and "ch" is empty
      if (ch === '') {
        setch('X');
        setIsPressed(!isPressed)
      } else if (ch === 'X') {
        setch('O');
        setIsPressed(!isPressed)
      } else if (ch === 'O') {
        setch('X');
        setIsPressed(!isPressed)
      }
      
    //}
  
  };

  function checkpos(x,y){
    let lastUnpressedRow = -1;
  }
  return (
   
      <View x={x} y={y}>
    {//ch && (
       //<div style={backgroundColor='#000000' } /*src={ch === 'X' ? styles.pressedRed : styles.pressedYellow}*/>
       //</div>
       <TouchableOpacity  style={isPressed ? (ch === 'X' ? styles.pressedRed : styles.pressedYellow) : styles.dotprimario}
        onPress={handlePress} disabled={isPressed}>
          <View style={styles.container}/>
        </TouchableOpacity>
       /*<View style={styles.container}>
       <TouchableOpacity style={isPressed ? styles.pressedYellow : styles.dotprimario} onPress={() => setIsPressed(!isPressed)} >
       </TouchableOpacity>
       </View>*/
       //)
      }
       </View>
  )
}

Tile.propTypes = {}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    slot:{
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding:10,
      //display:"inline-block",
      //borderRadius: "50%",
      borderRadius: 50,
      width: 75,
      height: 75,
    },


    tile: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        width: 75,
        height: 75,
    },
    tilePressed: {
        alignItems: 'center',
        backgroundColor: '#FF0000',
        padding: 10,
        width: 75,
        height: 75,
    },

    pressedRed:{
        alignItems: 'center',
        backgroundColor: '#FF0000',
        borderRadius: 50,
        padding: 10,
        width: 75,
        height: 75,
    },

    pressedYellow:{
      alignItems: 'center',
      backgroundColor: '#FFFF00',
      borderRadius: 50,
      padding: 10,
      width: 75,
      height: 75,
  },

    dotprimario: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding:10,
      //display:"inline-block",
      //borderRadius: "50%",
      borderRadius: 50,
      width: 75,
      height: 75,
    },

    dotsecundario: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding:10,
      //display:"inline-block",
      //borderRadius: "50%",
      borderRadius: 50,
      width: 75,
      height: 75,
    }
});

export default Tile;