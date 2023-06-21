import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/Components/Home';
import Lists from './src/Components/ViewLists';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
          <Stack.Navigator>
          <Stack.Screen
          name="Inicio"
          component={Home}
        />
        <Stack.Screen 
        name="Mis listas" 
        component={Lists} />
      </Stack.Navigator>
      {/* <Home /> */}
    </NavigationContainer>
   
  );
}

