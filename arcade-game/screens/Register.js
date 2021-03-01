import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, ImageBackground, SafeAreaView, ScrollView, Alert } from 'react-native';
import tailwind from 'tailwind-rn';
import axios from "axios";

import { AntDesign } from '@expo/vector-icons';

import background from '../assets/imgGlobal/background.png';

const API = 'https://arcade-game-pi.herokuapp.com/api';

const Register = ({ navigation }) => {

    const initialForm = {
        name: '',
        lastname: '',
        nickname: '',
        age: '',
        email: '',
        password: ''
    }

    const [newUser, setNewUser] = useState(initialForm);

    const insertNewUser = async () => {
        if (newUser.name == '' ||
            newUser.lastname == '' ||
            newUser.nickname == '' ||
            newUser.age == '' ||
            newUser.email == '' ||
            newUser.password == ''
        ) {
            Alert.alert('Oops!', 'Todos los campos son obligatorios')
        } else {
            await axios.post(`${API}/user`, newUser)
                .then(response => {
                    navigation.navigate("Home")
                    Alert.alert('Bienvenidp', 'Registro exitoso')
                })
                .catch((error) => {
                    Alert.alert('Error', 'Intentalo mas tarde')
                });
        }
    }

    const handleChangeText = (name, value) => {
        setNewUser({ ...newUser, [name]: value })
    }

    return (
        <ImageBackground style={styles.login} source={background}>
            <SafeAreaView>
                <ScrollView>
                    <Text style={{ textAlign: 'center', color: 'black', fontSize: 30, marginTop: 5, fontFamily: 'Montserrat' }}>INGRESA TUS DATOS</Text>
                    <View style={styles.login}>
                        <TextInput style={styles.text} placeholder="Nombre" onChangeText={value => handleChangeText('name', value)} />
                        <TextInput style={styles.text} placeholder="Apellido" onChangeText={value => handleChangeText('lastname', value)} />
                        <TextInput style={styles.text} placeholder="Edad" onChangeText={value => handleChangeText('nickname', value)} />
                        <TextInput style={styles.text} placeholder="Apodo" onChangeText={value => handleChangeText('age', value)} />
                        <TextInput style={styles.text} placeholder="Correo Electrónico" onChangeText={value => handleChangeText('email', value)} />
                        <TextInput style={styles.text} placeholder="Contraseña" onChangeText={value => handleChangeText('password', value)} />
                        <View style={styles.containterButton}>
                            <TouchableOpacity style={styles.loginButton} onPress={() => insertNewUser()}>
                                <Text style={{ textAlign: 'center', color: 'white', fontFamily: 'Montserrat', fontSize: 20 }}>
                                    REGISTRARME <AntDesign name="login" size={24} style={styles.icon} /></Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: tailwind('flex h-full justify-center items-center'),
    login: tailwind('w-full h-full'),
    text: tailwind('p-2 mx-3 my-2  bg-white rounded'),
    containterButton: tailwind('w-full items-center justify-center mt-3'),
    loginButton: tailwind('w-72 py-3 bg-yellow-400 rounded mb-1'),
    icon: tailwind('rounded-full text-white py-5 text-2xl')
});

export default Register
