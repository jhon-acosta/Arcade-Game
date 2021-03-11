import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
import tailwind from 'tailwind-rn';
import { useFonts } from 'expo-font';

import condor from '../../../../assets/imgStrategy/condor.png'
import background from '../../../../assets/imgStrategy/background.png'

const Welcome = ({ navigation }) => {
    const [loaded] = useFonts({
        Montserrat: require('../../../../assets/fonts/Montserrat.ttf'),
    });
    if (!loaded) {
        return null;
    }
    return (
        <ImageBackground style={styles.container} source={background}>
            <View>
                <Text style={{ fontFamily: 'Montserrat', color: 'white', fontSize: 50 }}>
                    BIENVENIDO
                </Text>
            </View>
            <View style={styles.imgContainer}>
                <Image source={condor} style={styles.img} />
            </View>
            <View style={styles.subContainter}>

                <Text style={{ fontFamily: 'Montserrat' }}>
                    CONOCE A <Text style={{ color: 'white', fontSize: 18 }}> CONDOR FLY</Text>
                </Text>
                <Text style={{ fontFamily: 'Montserrat' }}>
                    Y SU OBJETIVO
                </Text>
                <TouchableOpacity style={styles.buttonBlue}
                    onPress={() => navigation.navigate("History")}>
                    <Text style={{ fontFamily: 'Montserrat', color: 'white' }}>SIGUIENTE</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonRed}
                    onPress={() => navigation.navigate("Strategy")}>
                    <Text style={{ fontFamily: 'Montserrat', color: 'white' }}>OMITIR</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: tailwind('h-full justify-center items-center bg-gray-200'),
    imgContainer: tailwind('p-7'),
    subContainter: tailwind('flex items-center justify-center bg-yellow-400 p-4 rounded border-l-2 border-b-2 border-yellow-500'),
    buttonBlue: tailwind('flex items-center bg-blue-400 p-3 w-32 m-2'),
    buttonRed: tailwind('flex items-center bg-red-400 p-3 w-32'),
    buttons: tailwind('p-2 bg-yellow-400 rounded m-1'),
});

export default Welcome
