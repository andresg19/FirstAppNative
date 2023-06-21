import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    btn: {
        marginTop:10,
        width: 80,
        backgroundColor:'gray'
    },
    table: {
      borderWidth: 1,
      borderColor: '#000',
      marginTop:90
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