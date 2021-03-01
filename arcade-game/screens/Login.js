import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Alert,  ImageBackground } from 'react-native';
import tailwind from 'tailwind-rn';
import { useFonts } from 'expo-font';
import axios from "axios";;

import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import background from '../assets/imgGlobal/background.png';

const API = 'http://192.168.1.5:8000/api';

const Login = ()=> {

        return (
            <ImageBackground style={styles.container} source={background}>
                <Text style={styles.title}>INGRESA TU:</Text>
                <FontAwesome name="gamepad" size={24} style={styles.iconGame} />
                <View style={styles.login}>
                    <TextInput style={styles.text} placeholder="Correo electrónico" onChangeText={value => this.handleChangeText('email', value)} />
                    <TextInput style={styles.text} placeholder="Contraseña" onChangeText={value => this.handleChangeText('password', value)} />
                    <View style={styles.containterButton}>
                        <TouchableOpacity style={styles.singInButton}>
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

