import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import tailwind from 'tailwind-rn';
import { useFonts } from 'expo-font';

import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Invitate = ({navigation}) => {
    const [loaded] = useFonts({
        Montserrat: require('../../assets/fonts/Montserrat.ttf'),
    });
    if (!loaded) {
        return null;
    }
    return (
        <View style={styles.container}>
            <Text style={{ textAlign: 'center', color: 'black', fontSize: 30, fontFamily:'Montserrat' }}>INVITADO</Text>
            <View style={styles.warning}>
                <AntDesign name="warning" size={24} color="black" style={{ alignItems: 'center', justifyContent: 'center', alignContent: 'center' }} />
                <Text style={{fontFamily:'Montserrat', fontSize:20, textAlign:'center'}}>
                    Bienvenido, recuerda en como invitado tus datos de partida no serán guardados.
                </Text>
                <Text style={{fontFamily:'Montserrat', padding:10, fontSize:20}}>
                    Registrate e Inicia Sesión
                </Text>
                <TouchableOpacity>
                    <TouchableOpacity style={styles.singInButton} onPress={() => navigation.navigate('Register')}>
                        <Text style={{ textAlign: 'center', color: 'white', fontFamily: 'Montserrat', fontSize: 20 }}>REGISTRARSE <Feather name="user-plus" size={26} color="white" /></Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('Home')}>
                        <Text style={{ textAlign: 'center', color: 'white', fontFamily: 'Montserrat', fontSize: 20 }}>COMENZAR <MaterialCommunityIcons name="clock-start" size={24} color="white" /></Text>
                    </TouchableOpacity>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: tailwind('flex h-full justify-center items-center bg-blue-100'),
    warning: tailwind('flex rounded bg-yellow-200 m-5 p-5 justify-center items-center'),
    textOne: tailwind('text-2xl'),
    textTwo: tailwind('text-2xl my-5'),
    singInButton:tailwind('bg-yellow-400 p-3'),
    nextButton:tailwind('flex bg-blue-400 p-3 my-2 items-center justify-center'),
    iconTwo:tailwind('flex items-center justify-center')

});

export default Invitate
