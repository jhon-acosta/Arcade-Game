import React, { useEffect, useState, useContext } from 'react'
import { StyleSheet, Image, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import axios from "axios";
import tailwind from 'tailwind-rn';
import injuredBackground from '../../../../assets/imgStrategy/injuredBackground.png';
import { DepartureContext } from '../contexts/DepartureContext'

// const API = 'https://arcade-game-v2.herokuapp.com/api';
const API = 'http://192.168.1.7:8000/api'

const GameOver = ({ navigation, route }) => {
    const { score } = route.params
    const { userData, setUserData } = useContext(DepartureContext);


    const capureData = () => {
        setUserData({ ...userData, points: score, game_id: 2 })
    }

    const postData = async () => {
        await axios.post(`${API}/departure`, userData)
            .then(response => {
                // console.log(JSON.stringify(response))
            })
            .catch((error) => {
                // console.log(JSON.stringify(error));
            });
    }

    const goStrategy = () => {
        capureData();
        postData();
        navigation.push("Strategy")
    }

    const goHome = () => {
        capureData();
        postData();
        navigation.navigate('Home')
    }
    return (
        <ImageBackground style={styles.container} source={injuredBackground}>
            <Text>{JSON.stringify(userData)}</Text>
            <Text style={{ fontFamily: 'Montserrat', color: 'black', fontSize: 40, textAlign: 'center' }}>INTENTALO</Text>
            <Text style={{ fontFamily: 'Montserrat', color: 'black', fontSize: 20, textAlign: 'center' }}>DE</Text>
            <Text style={{ fontFamily: 'Montserrat', color: 'black', fontSize: 30, textAlign: 'center', paddingBottom: 200 }}>NUEVO</Text>
            <Text style={{ fontFamily: 'Montserrat', color: 'black', fontSize: 20, padding: 5, textAlign: 'center' }}>Puntaje: {score}</Text>
            <TouchableOpacity style={styles.buttonTried} onPress={() => goStrategy()}>
                <Text style={{ fontFamily: 'Montserrat', color: 'white' }}>NUEVO INTENTO</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => goHome()}
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
