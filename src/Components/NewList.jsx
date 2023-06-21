import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import NewTable from './NewTable';

const NewList = () => {
  
  return (
      <View style={styles.table}>
        <TextInput style={styles.inp} placeholder='nombre proveedor & fecha...'/>
       <NewTable/>
    </View>
  );
};

const styles = StyleSheet.create({

  inp: {
    width: '80%',
    marginLeft: 'auto',
    marginRight:'auto',
    textAlign: 'center',
    
},

  table: {
    borderWidth: 1,
    borderColor: '#000',
    marginTop:20,
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent'
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

export default NewList;