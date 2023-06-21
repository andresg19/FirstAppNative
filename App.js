import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/Components/Home';
import Views from './src/Components/ViewLists';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
          <Stack.Navigator>
          <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen 
        name="Views" 
        component={Views} />
      </Stack.Navigator>
      {/* <Home /> */}
    </NavigationContainer>
   
  );
}

