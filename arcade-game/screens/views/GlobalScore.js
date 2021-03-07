import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text } from 'react-native';
import tailwind from 'tailwind-rn';
import { DataTable } from 'react-native-paper';
import axios from "axios";

const API = 'https://arcade-game-v2.herokuapp.com/api'

const GlobalScore = () => {

    const [topJud, setTopJud] = useState({
        user_id: '',
        nickname: '',
        time: ''
    })

    const [topCondorFly, setTopCondorFly] = useState({
        user_id: '',
        nickname: '',
        time: ''
    })

    const topOneJud = async () => {
        await axios.get(`${API}/time/min`)
            .then(res => {
                const top = res.data;
                setTopJud(top)
            });
    }

    const topOneCondorFly = async () => {
        await axios.get(`${API}/point/max`)
            .then(users => {
                const top = users.data;
                setTopCondorFly(top)
            });
    }

    useEffect(() => {
        topOneJud()
        topOneCondorFly()
    }, [])
    return (
        <View style={styles.container}>
            <View>
            <Text style={{fontSize:30, textAlign:'center', padding:25}}>JUD</Text>
                <DataTable>
                    <DataTable.Header>
                        <DataTable.Title>Nickname</DataTable.Title>
                        <DataTable.Title>Tiempo minimo</DataTable.Title>
                    </DataTable.Header>
                    <DataTable.Row key={topJud.user_id}>
                        <DataTable.Cell >{topJud.nickname}</DataTable.Cell>
                        <DataTable.Cell >{topJud.time}</DataTable.Cell>
                    </DataTable.Row>
                </DataTable>
            </View>
            <View>
                <Text style={{fontSize:30, textAlign:'center', padding:25}}>CONDOR FLY</Text>
                <DataTable>
                    <DataTable.Header>
                        <DataTable.Title>Nickname</DataTable.Title>
                        <DataTable.Title>Mayor puntaje</DataTable.Title>
                    </DataTable.Header>
                    <DataTable.Row key={topCondorFly.user_id}>
                        <DataTable.Cell >{topCondorFly.nickname}</DataTable.Cell>
                        <DataTable.Cell >{topCondorFly.point}</DataTable.Cell>
                    </DataTable.Row>
                </DataTable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: tailwind('h-full justify-center bg-blue-100'),
    textHeader: tailwind('bg-green-600 px-5 py-4 text-lg text-white font-bold')
});

export default GlobalScore;
