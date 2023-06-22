import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';

export default function Detail () {
    const data = useSelector(state => state.detail);
    console.log(data);
    return (
        <View>
            <Text>Hola!</Text>
        </View>
    )
}