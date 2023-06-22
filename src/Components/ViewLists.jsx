import React, { useEffect } from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail, getTables } from '../Redux/Actions/actions';
import { styles } from '../Styles/Lists';
import { ScrollView } from 'react-native-gesture-handler';


export default function ViewLists ({navigation}) {
    const nameLists = useSelector(state => state.componentAllLists[0]);
    console.log(nameLists)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTables());
       }, [])

       const onTouch = (name) => {
       } 
    return ( 
        <View style={styles.container}>
       <ScrollView contentContainerStyle={styles.scrollContent}>
        { nameLists ? nameLists.map((name, i) => (
            <View key={i} style={styles.content}> 
            <Button  style={styles.btn} title={`${name}`} />
            </View>
        )) : null}
       </ScrollView>
        </View>
     );
}
 
