import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Text, View} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Tile from './components/Tile';
import Historico from './Historico';
//import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, TouchableOpacity, useSelector } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { StatusBar } from 'expo-status-bar';


const Jogo = props => {
  const navigation = useNavigation();
  const [historico, setHistorico] = useState([]);
  //Novo
  const [jogadorAtual, setJogador ] = useState('');
  const [jogadorAdv, setAdv ] = 'O';
  const [jogadas, setjogadas] = useState(16);
  const [winner, setwinner] = useState('');
  const[endgame, setendgame] = useState(false);
  const [gameOverMessage, setGameOverMessage] = useState('');
  const [board, setboard] = useState([
    ['','','',''],
    ['','','',''],
    ['','','',''],
    ['','','',''],
  ]);

  const handleTilePress = (i, j) => {
    if (board[i][j] === '' && winner === '') {
      const newBoard = [...board];
      newBoard[i][j] = jogadorAtual;
      setboard(newBoard);
      setJogador(jogadorAtual === 'X' ? 'O' : 'X');
    }
  };

  function wingame(board, row, column) {
    for (let i = 0; i < 4; i++) {
      if (
        board[i][0] !== '' &&
        board[i][0] === board[i][1] &&
        board[i][0] === board[i][2] &&
        board[i][0] === board[i][3]
      ) {
        setwinner(jogadorAtual);
        setGameOverMessage(jogadorAtual);
        if (winner !== '') {
          addToHistory(winner);
        }
        return getWinPage();
      }
    }

    // Check columns for a winner
    for (let j = 0; j < 4; j++) {
      if (board[0][j] !== '' && board[0][j] === board[1][j] && board[0][j] === board[2][j] && board[0][j] === board[3][j]) 
      {
        setwinner(jogadorAtual);
        setGameOverMessage(jogadorAtual);
        if (winner !== '') {
          addToHistory(winner);
        }
        return getWinPage();
      }
    }

    // Check diagonals for a winner
    if (
      board[0][0] !== '' &&
      board[0][0] === board[1][1] &&
      board[0][0] === board[2][2] &&
      board[0][0] === board[3][3]
    ) {
      setwinner(jogadorAtual);
      setGameOverMessage(jogadorAtual);
      if (winner !== '') {
        addToHistory(winner);
      }
      return getWinPage();
    }

    if (
      board[0][3] !== '' &&
      board[0][3] === board[1][2] &&
      board[0][3] === board[2][1] &&
      board[0][3] === board[3][0]
    ) {
      setwinner(jogadorAtual);
      setGameOverMessage(jogadorAtual);
      if (winner === '') {
        addToHistory(jogadorAtual);
      }
      return getWinPage();
    }

    // If no winner and all tiles are filled, it's a draw
    let isDraw = true;
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (board[i][j] === '') {
          isDraw = false;
          break;
        }
      }
      if (!isDraw) break;
    }
    if (isDraw) {
      setwinner('Draw');
      setGameOverMessage('Empate');
      addToHistory('Empate'); // Pass the string 'Empate' to addToHistory
      return getWinPage('Empate');
    }
    //setHistorico('Fim de jogo')
  }

  useEffect(() => {
    if (winner === 'Draw') {
      addToHistory('Empate');
    }
  }, [winner]);
  
  function getWinPage(){
    return (
      <View style={styles.container}>
      <StatusBar />
      {gameOverMessage ? <Text style={{ fontSize: 20 }}>{gameOverMessage}</Text> : null}
      <TouchableOpacity style={styles.historyButton} onPress={mudarParaOHistorico}>
        <Text style={{ fontSize: 20, color: '#FFFFFF' }}>View History</Text>
      </TouchableOpacity>
    </View>
    );
  }
  /*
  const wingame = (row,column, ch) => {
    try{
    if(board[row + 1][column + 1] === ch) {
      if(board[row + 2][column + 2] === ch) {
        if(board[row + 3][column + 3] === ch) {
          if(board[row + 4][column + 4] === ch) {
      
          }
        }
      }
    }
  }catch(e) {console.log(e)}

  try{
    if(board[row + 1][column - 1] === ch) {
      if(board[row + 2][column - 2] === ch) {
        if(board[row + 3][column - 3] === ch) {
          if(board[row + 4][column - 4] === ch) {
      
          }
        }
      }
    }
  }catch(e) {console.log(e)}
  }*/


 const updateboard = (row,column, ch) => {
  setboard(prev => {
    const boardcopy = [...prev];
    boardcopy[row][column] = ch;
    return boardcopy;
  });
  return wingame(row,column,ch);
 }

  const handleClick = (i,j) => {

    const column = j;
    let row = board.findIndex((rowArr, index) => {
      return (rowArr[column] !== '' || (index === board.length - 1));
    });
    if (row !== board.length - 1) row -= 1;
    if (board[row][column] !== '') row -= 1;


    if (board[i][j] === '' && winner === '') {
      handleTilePress(i, j);
      setjogadas((prevJogadas) => prevJogadas - 1);
      wingame(board, i, j);
      setJogador(jogadorAtual === 'X' ? 'O' : 'X');
    }
  };

  //const counter = useSelector((state) => state.counter.value)
//#region Historico

const addToHistory = (winner) => {
  setHistorico((prevHistory) => [...prevHistory, winner]);
};

const mudarParaOHistorico = () => {
  navigation.navigate("Historico", {
    historico: historico, // Pass the historico array as a prop to the Historico screen
  });
};
//#endregion


  return (
    <>
    
    <View style={styles.back}>
        <Text style={{color: '#FFFFFF'}}>Jogo</Text>
        <View style={{flexDirection: 'row'}} >
        {
          
      board.map((row,i) => {
        return(
          <View key={i}>
          {
          row.map((ch , j) => {
            return <Tile ch={ch} setch={() => handleClick(i, j)} jogadorAtual  y={i} x={j} /*onPress={handleClick} onPress={ch ='X'}*//>
          })
        }
        </View>) 
      })
    }
        </View>
        {gameOverMessage ? (
        <View style={styles.resultados}>
          <StatusBar />
          <Text style={{ fontSize: 20 }}>O vencedor é o jogador {gameOverMessage}</Text>
          <TouchableOpacity
            style={styles.historyButton}
            onPress={mudarParaOHistorico}
          >
            <Text style={styles.buttonText}>View History</Text>
          </TouchableOpacity>
        </View>
      ) : null}
        <Text style={{fontSize: 80}}>2</Text>
        </View>
    </>
  )
}

Jogo.propTypes = {}

const styles = StyleSheet.create({
  container: {
      padding: 10,
  },
  back: {
      alignItems: 'center',
      backgroundColor: '#0000FF',
  },
  textcolor:{
    textcolor: '#000000',
  },
  resultados:{
    marginTop: 50,
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  historyButton: {
    backgroundColor: '#000000',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
});

export default Jogo