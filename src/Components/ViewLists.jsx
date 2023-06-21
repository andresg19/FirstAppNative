import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { styles } from '../Styles/Views';
import db from '../Config/firebase';
import { useSelector } from 'react-redux';
import Table from './Table';


export default function Lists () {
    const lists = useSelector(state => state.lists);
    console.log(lists)
    useEffect(() => {
     
    }, [])
    return ( 
        <Table />
     );
}
 
