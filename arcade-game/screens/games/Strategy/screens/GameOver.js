import React, { useEffect, useState } from 'react'
import { StyleSheet, Image, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import tailwind from 'tailwind-rn';
import * as SQLite from 'expo-sqlite';
const db = SQLite.openDatabase('db.arcade');

import injuredBackground from '../../../../assets/imgStrategy/injuredBackground.png'

const GameOver = ({ navigation, route }) => {
    const [userData, setUserData] = useState({
        id: '',
        name: '',
        lastname: '',
        nickname: '',
        email: '',
        password: '',
        age: ''
    });
    const { score } = route.params

    const getData = () => {
        db.transaction(
            tx => {
                // tx.executeSql('DROP TABLE arcade')
                // setIniciated('')
                // tx.executeSql('CREATE TABLE IF NOT EXISTS arcade(id INT, name TEXT, lastname TEXT, nickname TEXT, email TEXT, password TEXT, age TEXT)');
                tx.executeSql('select * from arcade', [], (_, { rows }) =>
                    rows._array[0] !== undefined ? setUserData({
                        id: rows._array[0].id,
                        name: rows._array[0].name,
                        lastname: rows._array[0].lastname,
                        nickname: rows._array[0].nickname,
                        email: rows._array[0].email,
                        password: rows._array[0].password,
                        age: rows._array[0].age,
                    }) : navigation.navigate('Credentials')
                );
            },
            null,
        );
    }

    useEffect(() => {
        getData();
        console.log(userData)
    })
    return (
        <ImageBackground style={styles.container} source={injuredBackground}>
            <Text style={{ fontFamily: 'Montserrat', color: 'black', fontSize: 40, textAlign: 'center' }}>INTENTALO</Text>
            <Text style={{ fontFamily: 'Montserrat', color: 'black', fontSize: 20, textAlign: 'center' }}>DE</Text>
            <Text style={{ fontFamily: 'Montserrat', color: 'black', fontSize: 30, textAlign: 'center', paddingBottom: 200 }}>NUEVO</Text>
            <Text style={{ fontFamily: 'Montserrat', color: 'black', fontSize: 20, padding: 5, textAlign: 'center' }}>Puntaje: {score}</Text>
            <TouchableOpacity style={styles.buttonTried} onPress={() => navigation.push("Strategy")}>
                <Text style={{ fontFamily: 'Montserrat', color: 'white' }}>NUEVO INTENTO</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}
                style={styles.buttonHome}>
                <Text style={{ fontFamily: 'Montserrat', color: 'white' }}>INICIO</Text>
            </TouchableOpacity>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: tailwind('h-full justify-center items-center bg-yellow-100'),
    buttonTried: tailwind('p-2 bg-blue-400'),
    buttonHome: tailwind('p-2 bg-red-400'),
    buttonTried: tailwind('flex items-center bg-blue-400 p-3'),
    buttonHome: tailwind('flex items-center bg-red-400 p-3 m-2'),
});

export default GameOver
