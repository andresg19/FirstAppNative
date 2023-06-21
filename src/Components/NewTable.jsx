import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { styles } from '../Styles/NewTable';

const NewTable = () => {
  const [filas, setFilas] = useState([]);
  console.log(filas, 'filas')

  
  const add = () => {
    let i = 1
    setFilas([...filas, i ]);
    i ++;
  };

  const rest = () => {
      const pop = filas.slice(0, -1);
      setFilas(pop);
  };


  return (
      <View style={styles.table}>
      <View style={styles.tableRow}>
        <Text style={styles.tableHeaderCell}>Producto</Text>
        <Text style={styles.tableHeaderCell}>Stock</Text>
        <Text style={styles.tableHeaderCell}>$ Costo</Text>
        <Text style={styles.tableHeaderCell}>$ Venta</Text>
      </View>
      {
        filas.length === 0 ? null 
       :
       filas.map((f, index) => (
         <View style={styles.tableRow} key={index}>
            <TextInput style={styles.tableCell} nativeID='product' placeholder='...' />
            <TextInput style={styles.tableCell} nativeID='stock' placeholder='...' />
            <TextInput style={styles.tableCell} nativeID='costo' placeholder='...' />
            <TextInput style={styles.tableCell} nativeID='venta' placeholder='...' />
            </View>
            ))
          } 
      <TouchableOpacity>
        <Text onPress={add} style={styles.btn}>Agregar filas {filas.length}</Text>
        <Text onPress={rest} style={styles.btn}>Quitar fila</Text>
      </TouchableOpacity>
    </View>
  );
};


export default NewTable;