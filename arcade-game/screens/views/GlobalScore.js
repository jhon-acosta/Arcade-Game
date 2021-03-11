import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text } from 'react-native';
import tailwind from 'tailwind-rn';
import { DataTable } from 'react-native-paper';
import axios from "axios";

import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const API = 'https://arcade-game-v2.herokuapp.com/api'

const GlobalScore = () => {

    const [topAhorcado, settopAhorcado] = useState({
        user_id: '',
        nickname: '',
        time: ''
    })

    const [topCondorFly, setTopCondorFly] = useState({
        user_id: '',
        nickname: '',
        time: ''
    })

    const [error, setError] = useState(false)

    const topOneJud = async () => {
        await axios.get(`${API}/time/min`)
            .then(res => {
                const top = res.data;
                settopAhorcado(top)
            })
            .catch(err => {
                setError(true)
            })
    }

    const topOneCondorFly = async () => {
        await axios.get(`${API}/point/max`)
            .then(users => {
                const top = users.data;
                setTopCondorFly(top)
            })
            .catch(err => {
                setError(true)
            })
    }

    useEffect(() => {
        topOneJud()
        topOneCondorFly()
    }, [])
    return (
        <View style={styles.container}>
            <View>
                <Text style={{ fontSize: 30, textAlign: 'center', paddingTop: 25 }}>AHORCADO</Text>
                <Text style={{ textAlign: 'center' }}><AntDesign name="staro" size={24} style={styles.icons} /><AntDesign name="staro" size={24} style={styles.icons} /><AntDesign name="staro" size={24} style={styles.icons} /></Text>
                <DataTable>
                    <DataTable.Header>
                        <DataTable.Title numeric></DataTable.Title>
                        <DataTable.Title></DataTable.Title>
                    </DataTable.Header>
                    <DataTable.Row key={topAhorcado.user_id}>
                        <DataTable.Cell >MÍNIMO TIEMPO</DataTable.Cell>
                        <DataTable.Cell numeric>{topAhorcado.time}</DataTable.Cell>
                        <DataTable.Cell numeric><MaterialIcons name="looks-one" size={24} style={styles.icons} /></DataTable.Cell>
                    </DataTable.Row>
                </DataTable>
            </View>
            <View>
                <Text style={{ fontSize: 30, textAlign: 'center', paddingTop: 25 }}>CONDOR FLY</Text>
                <Text style={{ textAlign: 'center' }}><AntDesign name="staro" size={24} style={styles.icons} /><AntDesign name="staro" size={24} style={styles.icons} /><AntDesign name="staro" size={24} style={styles.icons} /></Text>
                <DataTable>
                    <DataTable.Header>

                        <DataTable.Title numeric></DataTable.Title>
                        <DataTable.Title></DataTable.Title>
                    </DataTable.Header>
                    <DataTable.Row key={topCondorFly.user_id}>
                        <DataTable.Cell >MÁXIMO PUNTAJE</DataTable.Cell>
                        <DataTable.Cell numeric>{topCondorFly.point}</DataTable.Cell>
                        <DataTable.Cell numeric><MaterialIcons name="looks-one" size={24} style={styles.icons} /></DataTable.Cell>
                    </DataTable.Row>
                </DataTable>
            </View>
            <View style={styles.congratulations}>
                <Text style={styles.textOne}>A LOS TOP GLOBAL</Text>
                <Text style={styles.textTwo}>FELICIDADES</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: tailwind('h-full justify-center bg-blue-100'),
    textHeader: tailwind('bg-green-600 px-5 py-4 text-lg text-white font-bold'),
    icons: tailwind('text-yellow-400'),
    congratulations: tailwind('flex items-center justify-center p-5 m-5 bg-yellow-400 rounded'),
    textOne: tailwind('text-white text-xl'),
    textTwo: tailwind('text-white '),
});

export default GlobalScore;
