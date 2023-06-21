import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { styles } from '../Styles/Views';
import db from '../Config/firebase';


export default function Lists () {
    const collectionRef = db.collection('listas');
    const data = {
        costo: 2000,
        producto: 'peras',
        stock: 20,
        veta: 210
      };
    useEffect(() => {
        collectionRef.add(data)
  .then(() => {
    console.log('Documento insertado correctamente');
  })
  .catch((error) => {
    console.error('Error al insertar el documento:', error);
  });
    }, [])
    return ( 
        <View style={styles.container}>
            <Text>Hola!</Text>
        </View>
     );
}
 
