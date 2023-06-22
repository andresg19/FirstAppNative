import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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