import React, { useEffect } from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getTables } from '../Redux/Actions/actions';
import { styles } from '../Styles/Lists';
import { ScrollView } from 'react-native-gesture-handler';


export default function ViewLists () {
    const nameLists = useSelector(state => state.componentAllLists[0]);
    console.log(nameLists)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTables());
       }, [])
    return ( 
        <View style={styles.container}>
       <ScrollView contentContainerStyle={styles.scrollContent}>
        { nameLists ? nameLists.map((name, i) => (
            <View key={i} style={styles.content}> 
            <Button style={styles.btn} title={`${name}`} />
            </View>
        )) : null}
       </ScrollView>
        </View>
     );
}
 
