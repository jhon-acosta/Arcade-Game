import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Alert, ImageBackground, Modal } from 'react-native';
import tailwind from 'tailwind-rn';
import axios from "axios";
import * as SQLite from 'expo-sqlite';
import { useFonts } from 'expo-font';

const db = SQLite.openDatabase('db.arcade');

import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import background from '../../assets/background.png';

const API = 'https://arcade-game-v2.herokuapp.com/api'
//const API = 'http://192.168.1.5:8000/api';

const Login = ({ navigation }) => {

    const initialLogin = {
        email: '',
        password: ''
    }
    const [loginUser, setLoginUser] = useState(initialLogin);

    const handleChangeText = (name, value) => {
        setLoginUser({ ...loginUser, [name]: value })
        //console.log(loginUser)
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
                    navigation.navigate('Home');
                } else {
                    Alert.alert('INTÉNTALO DE NUEVO', 'Campos vacíos o incorrectos')
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
    const [loaded] = useFonts({
        Montserrat: require('../../assets/fonts/Montserrat.ttf'),
    });
    if (!loaded) {
        return null;
    }
    return (

        <ImageBackground style={styles.container} source={background}>
            <Text style={{ fontFamily: 'Montserrat', fontSize: 30, padding: 20, color: 'white' }}>ACCEDER</Text>
            <EvilIcons name="user" size={24} style={styles.iconUser} />
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
    iconGame: tailwind('bg-white rounded-full text-yellow-400 p-3 text-4xl mb-5'),
    iconUser: tailwind('bg-gray-100 text-yellow-400 p-5 rounded-full text-4xl ')
});

export default Login

