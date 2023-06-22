import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

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

const styles = StyleSheet.create({
  table: {
    borderWidth: 1,
    borderColor: '#000',
    marginBottom: 10,
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableHeaderCell: {
    flex: 1,
    padding: 10,
    fontWeight: 'bold',
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#000',
  },
  tableCell: {
    flex: 1,
    padding: 10,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#000',
  },
});
