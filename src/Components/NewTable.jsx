import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { styles } from '../Styles/NewTable';


export default function NewTable () {
  const [filas, setFilas] = useState([]);
  const [headTable, setHeadTable] = useState('');
  const [newList, setNewList] = useState([]);
  console.log(newList)

  
  const add = () => {
    let i = 1
    setFilas([...filas, i ]);
    i ++;
  };

  const rest = () => {
      const pop = filas.slice(0, -1);
      setFilas(pop);
      filas.length === newList.length ? newList.pop() : null;
  };

  const onChange = (index, field, value) => {
    setNewList((prevTableData) => {
      const updatedTableData = [...prevTableData];
      updatedTableData[index] = { ...updatedTableData[index], [field]: value };
      return updatedTableData;
    });
  };



  return (
      <View style={styles.table}>
        <TextInput value={headTable} onChangeText={(text) => setHeadTable(text)} placeholder='nombre de lista y fecha'/>
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
            <TextInput style={styles.tableCell} value={newList.producto} onChangeText={(text) => onChange(index, 'producto', text)} placeholder='...' />
            <TextInput style={styles.tableCell} value={newList.stock}  onChangeText={(text) => onChange(index, 'stock', text)}  placeholder='...' />
            <TextInput style={styles.tableCell} value={newList.costo}   onChangeText={(text) => onChange(index, 'costo', text)}  placeholder='...' />
            <TextInput style={styles.tableCell} value={newList.venta}   onChangeText={(text) => onChange(index, 'venta', text)}  placeholder='...' />
            </View>
            ))
          } 
      <TouchableOpacity>
        <Text onPress={add} style={styles.btn}>Agregar filas {filas.length}</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text onPress={rest} style={styles.btn}>Quitar fila</Text>
      </TouchableOpacity>
    </View>
  );
};

