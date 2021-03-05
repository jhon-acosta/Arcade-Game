import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Alert, ImageBackground } from 'react-native';
import tailwind from 'tailwind-rn';
import axios from "axios";
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('db.arcade');

import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import background from '../assets/imgGlobal/background.png';

const API = 'http://192.168.1.5:8000/api';

const Login = ({ navigation }) => {

    const initialLogin = {
        email: '',
        password: ''
    }
    const [loginUser, setLoginUser] = useState(initialLogin);

    const handleChangeText = (name, value) => {
        setLoginUser({ ...loginUser, [name]: value })
        console.log(loginUser)
    }

    const login = async () => {
        await axios.get(`${API}/login/${loginUser.email}`)
            .then(res => {
                const datos = res.data.data
                if (datos.email === loginUser.email &&
                    datos.password === loginUser.password
                ) {
                    db.transaction(
                        tx => {
                            tx.executeSql(`insert into arcade(id,name,lastname,nickname,email,password, age) values (?,?,?,?,?,?,?)`,
                                [datos.id, datos.name, datos.lastname, datos.nickname, datos.email, datos.password, datos.age]);
                        },
                        null,
                    );
                    navigation.push('Home');
                } else {
                    Alert.alert('INTÉNTALO DE NUEVO', 'Campos vacíos o incorrectos')
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        db.transaction(tx => {
            tx.executeSql('CREATE TABLE IF NOT EXISTS arcade(id INT, name TEXT, lastname TEXT, nickname TEXT, email TEXT, password TEXT, age TEXT)');
        });
    }, []);
    return (
        <ImageBackground style={styles.container} source={background}>
            <Text style={styles.title}>INGRESA TU:</Text>
            <FontAwesome name="gamepad" size={24} style={styles.iconGame} />
            <View style={styles.login}>
                <TextInput style={styles.text} placeholder="Correo electrónico" onChangeText={value => handleChangeText('email', value)} />
                <TextInput style={styles.text} placeholder="Contraseña" onChangeText={value => handleChangeText('password', value)} />
                <View style={styles.containterButton}>
                    <TouchableOpacity style={styles.singInButton} onPress={() => login()}>
                        <Text style={{ textAlign: 'center', color: 'white', fontFamily: 'Montserrat', fontSize: 20 }}>INGRESAR <AntDesign name="login" size={24} style={styles.icon} /></Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: tailwind('flex h-full justify-center items-center bg-yellow-400'),
    login: tailwind('w-full'),
    text: tailwind('p-2 mx-3 my-2 border-yellow-400 border-2 rounded bg-white'),
    containterButton: tailwind('w-full items-center justify-center'),
    singInButton: tailwind('w-72 py-3 mt-5 bg-blue-400 rounded mb-1'),
    title: tailwind('text-3xl text-gray-700 mb-5 font-bold'),
    icon: tailwind('rounded-full text-white p-3 text-3xl'),
    iconGame: tailwind('bg-white rounded-full text-yellow-400 p-3 text-4xl mb-5')
});

export default Login

