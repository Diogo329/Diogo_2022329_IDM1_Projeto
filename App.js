import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Settings from './screens/Jogo';
import Jogo from './screens/Jogo';
import Historico from './screens/Historico';

const Stack = createStackNavigator();

export default function App(){
  return (
    /*<View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>*/
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Historico" component={Historico} />
          <Stack.Screen name="Settings" component={Settings}/>
          <Stack.Screen name="Jogo" component={Jogo}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

//export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
