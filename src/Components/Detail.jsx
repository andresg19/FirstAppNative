import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useRoute } from '@react-navigation/native';
import { getDetail } from '../Redux/Actions/actions';

export default function Detail () {
    const route = useRoute();
    const { name } = route.params;
    const dispatch = useDispatch();
    const data = useSelector(state => state.detail);
    console.log(data);

    useEffect(() => {
        dispatch(getDetail(name));
    }, []);
    return (
        <View>
            <Text>Hola!</Text>
        </View>
    )
}