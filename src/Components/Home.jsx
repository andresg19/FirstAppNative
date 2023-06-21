import React from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../Styles/Home';
import LinearGradient from 'react-native-linear-gradient';


export default function Home({navigation}) {
  return (
    <LinearGradient
    colors={['#FF9800', '#F44336']}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
    style={{ flex: 1 }}
  >
    <View style={styles.container}>
      <View style={styles.sectionOne}>
      <Text style={styles.fontsOne}>Hola!</Text>
      <Text style={styles.fontsOne}>¿Qué vas a hacer hoy?</Text>
      </View>
      <View style={styles.sectionTwo}>
       <TouchableOpacity onPress={() => navigation.navigate('Views')} style={styles.btn}>
        <Text style={styles.fontsTwo}>Ver Listas</Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.btn}>
        <Text style={styles.fontsTwo}>Nueva Lista</Text>
       </TouchableOpacity>
      </View>
    </View>

  </LinearGradient>
  );
}
