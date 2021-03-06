import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import tailwind from 'tailwind-rn';
import { useFonts } from 'expo-font';

import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import background from '../../assets/background.png';

const Credentials = ({ navigation }) => {
    const [loaded] = useFonts({
        Montserrat: require('../../assets/fonts/Montserrat.ttf'),
    });
    if (!loaded) {
        return null;
    }
    return (
        <ImageBackground style={styles.container} source={background}>
            <Text style={{ textAlign: 'center', fontFamily: 'Montserrat', fontSize: 50, color: 'white' }}>ARCADE GAME</Text>
            <Text style={{ textAlign: 'center', fontFamily: 'Montserrat', fontSize: 30, color: 'white' }}>¿Preparado?</Text>
            <FontAwesome name="gamepad" size={24} style={styles.icon} />
            <View style={styles.containterButton}>
                <Text style={styles.mood}>CREDENCIALES</Text>
                <TouchableOpacity style={styles.singInButton} onPress={() => navigation.navigate("Login")}>
                    <Text style={{ textAlign: 'center', color: 'white', fontSize: 20, fontFamily: 'Montserrat' }}> INICIAR SESIÓN <Ionicons name="enter-outline" size={24} color="white" /></Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.singInButton} onPress={() => navigation.navigate("Register")}>
                    <Text style={{ textAlign: 'center', color: 'white', fontSize: 20, fontFamily: 'Montserrat' }}> REGISTRATE  <Feather name="user-plus" size={26} color="white" /></Text>
                </TouchableOpacity>
                <Text style={styles.mood}>MODO</Text>
                <TouchableOpacity style={styles.singInButton} onPress={() => navigation.navigate("Invitate")}>
                    <Text style={{ textAlign: 'center', color: 'white', fontSize: 20, fontFamily: 'Montserrat' }}> INIVITADO </Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}


const styles = StyleSheet.create({
    container: tailwind('flex h-full justify-center items-center bg-blue-400'),
    login: tailwind('w-full'),
    text: tailwind('p-2 mx-3 my-2 border-transparent bg-white'),
    containterButton: tailwind('w-full items-center justify-center'),
    singInButton: tailwind('w-72 py-3 bg-yellow-400 rounded mb-1'),
    mood: tailwind('text-gray-200 text-lg border-b-2 border-t-2 w-72 text-center my-3 border-gray-300'),
    icon: tailwind('bg-gray-100 rounded-full text-yellow-400 p-3 text-4xl')
});
export default Credentials