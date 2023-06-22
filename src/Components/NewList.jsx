import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import NewTable from './NewTable';
import { styles } from '../Styles/NewList';

const NewList = () => {
  return (
      <View style={styles.table}>
       <NewTable />
    </View>
  );
};



export default NewList;