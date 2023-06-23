import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useRoute } from '@react-navigation/native';
import { clearDetail, getDetail } from '../Redux/Actions/actions';
import Table from './Table';

export default function Detail () {
    const route = useRoute();
    const { name } = route.params;
    const dispatch = useDispatch();
    const data = useSelector(state => state.detail);
    console.log(data)
    useEffect(() => {
        dispatch(getDetail(name));
        return () => {
            dispatch(clearDetail());
        };
    }, []);
    return (
        <View>
            <Table data={data} name={name}/>
        </View>
    )
}