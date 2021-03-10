import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
import tailwind from 'tailwind-rn';
import { useFonts } from 'expo-font';


import background from '../img/historiaLadron1.png'

const HistoryLadron = ({ navigation }) => {
    const [loaded] = useFonts({
        Montserrat: require('../../../../assets/fonts/Montserrat.ttf'),
    });
    if (!loaded) {
        return null;
    }
    return (
        <ImageBackground style={styles.container} source={background}>
            <View>
                <Text style={{ fontFamily: 'Montserrat', color: 'white', fontSize: 20 }}>
                    Salva a uno de los venados de Santa
                </Text>
                <Text style={{ fontFamily: 'Montserrat', color: 'white', fontSize: 20 }}>
                   ___________________________________
                </Text>
            </View>
    
            <View style={styles.subContainter}>

                <Text style={{ fontFamily: 'Montserrat' }}>
                    Robaron a <Text style={{ color: 'blue', fontSize: 16 }}>Ben</Text> el venado de Santa
                </Text>
                <Text style={{ fontFamily: 'Montserrat' }}>
                <Text style={{ color: 'green', fontSize: 16 }}>Para salvarlo tienes que adivinar</Text>
                </Text>
                <Text style={{ color: 'purple', fontSize: 16 }}>Las palabras no permitas que lo maten!!</Text>
                <TouchableOpacity style={styles.buttonBlue}
                    onPress={() => navigation.navigate("Ahorcado")}>
                    <Text style={{ fontFamily: 'Montserrat', color: 'white' }}>Ayudar</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: tailwind('h-full justify-center items-center bg-gray-200'),
    imgContainer: tailwind('p-7'),
    subContainter: tailwind('flex items-center justify-center bg-blue-200 p-8 rounded border-l-2 border-b-2 border-blue-500'),
    buttonBlue: tailwind('flex items-center bg-blue-400 p-3 w-24 m-2'),
    buttonRed: tailwind('flex items-center bg-red-400 p-3 w-24'),
    buttons: tailwind('p-2 bg-yellow-400 rounded m-1'),
});

export default HistoryLadron
