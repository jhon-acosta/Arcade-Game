import React from 'react'
import { StyleSheet, Image, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import tailwind from 'tailwind-rn';

import injuredBackground from '../../../../assets/imgStrategy/injuredBackground.png'

const GameOver = ({ navigation }) => {
    return (
        <ImageBackground style={styles.container} source={injuredBackground}>
            <Text style={{ fontFamily: 'Montserrat', color: 'black', fontSize: 40, textAlign: 'center' }}>INTENTALO</Text>
            <Text style={{ fontFamily: 'Montserrat', color: 'black', fontSize: 20, textAlign: 'center' }}>DE</Text>
            <Text style={{ fontFamily: 'Montserrat', color: 'black', fontSize: 30, textAlign: 'center', paddingBottom: 200 }}>NUEVO</Text>
            <Text style={{ fontFamily: 'Montserrat', color: 'black', fontSize: 20, padding: 5, textAlign: 'center' }}>PUNTAJE: 8</Text>
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
    container: tailwind('h-full justify-center items-center bg-yellow-400'),
    buttonTried: tailwind('p-2 bg-blue-400'),
    buttonHome: tailwind('p-2 bg-red-400'),
    buttonTried: tailwind('flex items-center bg-blue-400 p-3'),
    buttonHome: tailwind('flex items-center bg-red-400 p-3 m-2'),
});

export default GameOver
