import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { styles } from '../Styles/Table';

export default function Table () {
  return (
      <View style={styles.table}>
        <Text>Proveedor Fecha</Text>
      <View style={styles.tableRow}>
        <Text style={styles.tableHeaderCell}>Producto</Text>
        <Text style={styles.tableHeaderCell}>Stock</Text>
        <Text style={styles.tableHeaderCell}>$ Costo</Text>
        <Text style={styles.tableHeaderCell}>$ Venta</Text>
      </View>
      <View style={styles.tableRow}>
        <Text style={styles.tableCell}>...</Text>
        <Text style={styles.tableCell}>...</Text>
        <Text style={styles.tableCell}>...</Text>
        <Text style={styles.tableCell}>...</Text>
      </View>
    </View>
  );
};


