import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { styles } from '../Styles/Table';

export default function Table ({data, name}) {
let mapRender = data;
console.log(mapRender)
  return (
      <View style={styles.table}>
        <Text>{name}</Text>
      <View style={styles.tableRow}>
        <Text style={styles.tableHeaderCell}>Producto</Text>
        <Text style={styles.tableHeaderCell}>Stock</Text>
        <Text style={styles.tableHeaderCell}>$ Costo</Text>
        <Text style={styles.tableHeaderCell}>$ Venta</Text>
      </View>
        {mapRender ? Object.keys(mapRender).map((d, index) => (
          <View style={styles.tableRow} key={index}>
          <Text style={styles.tableCell}>{mapRender[d].producto}</Text>
          <Text style={styles.tableCell}>{mapRender[d].stock}</Text>
          <Text style={styles.tableCell}>{mapRender[d].costo}</Text>
          <Text style={styles.tableCell}>{mapRender[d].venta}</Text>
        {console.log(d)}
      </View>
        )) : (<Text>No hay tablas aun</Text>)}
    </View>
  );
};


