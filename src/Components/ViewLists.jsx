import React, { useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import db from '../Config/firebase';
import { useDispatch, useSelector } from 'react-redux';
import Table from './Table';
import { getTables } from '../Redux/Actions/actions';
import { styles } from '../Styles/Lists';


export default function ViewLists () {
    const nameLists = useSelector(state => state.componentAllLists);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTables());
       }, [])
    return ( 
       <View style={styles.container}>
        {nameLists.map((name, i) => (
            <TouchableOpacity style={styles.btn} key={i}>
                <Text>{name}</Text>
            </TouchableOpacity>
        ))}
       </View>
     );
}
 
