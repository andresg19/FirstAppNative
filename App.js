import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/Components/Home';
import NewList from './src/Components/NewList';
import { Provider } from 'react-redux';
import store from './src/Redux/Store/index';
import ViewLists from './src/Components/ViewLists';
import Detail from './src/Components/Detail';

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
        component={ViewLists} />

       <Stack.Screen 
        name="Crear lista" 
        component={NewList} />

      <Stack.Screen 
        name="Detalle" 
        component={Detail} />
      </Stack.Navigator>
      
      {/* <Home /> */}
    </NavigationContainer>
    </Provider>
   
  );
}

