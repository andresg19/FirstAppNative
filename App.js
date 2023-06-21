import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/Components/Home';
import Lists from './src/Components/ViewLists';
import NewList from './src/Components/NewList';
import { Provider } from 'react-redux';
import store from './src/Redux/Store/index';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
          <Stack.Navigator>
          <Stack.Screen
          name="Inicio"
          component={Home}
        />
        <Stack.Screen 
        name="Mis listas" 
        component={Lists} />

       <Stack.Screen 
        name="Crear lista" 
        component={NewList} />
      </Stack.Navigator>
      
      {/* <Home /> */}
    </NavigationContainer>
    </Provider>
   
  );
}

