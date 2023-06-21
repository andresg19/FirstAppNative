import React from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../Styles/Home';


export default function Home({navigation}) {
  return (
    
    <View style={styles.container}>
      <View style={styles.sectionOne}>
      <Text style={styles.fontsOne}>Hola!</Text>
      <Text style={styles.fontsOne}>¿Qué vas a hacer hoy?</Text>
      </View>
      <View style={styles.sectionTwo}>
       <TouchableOpacity onPress={() => navigation.navigate('Mis listas')} style={styles.btn}>
        <Text style={styles.fontsTwo}>Ver Listas</Text>
       </TouchableOpacity>
       <TouchableOpacity onPress={() => navigation.navigate('Crear lista')} style={styles.btn}>
        <Text style={styles.fontsTwo}>Nueva Lista</Text>
       </TouchableOpacity>
      </View>
    </View>

  );
}
