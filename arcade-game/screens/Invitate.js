import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';
import tailwind from 'tailwind-rn';

const Invitate = () => {
    return (
        <View style={styles.login}>
            <Text style={{ textAlign: 'center', color: 'white', fontSize: 30 }}>INVITADO</Text>
            <View>
                <TextInput style={styles.text} placeholder="Correo electrónico" onChangeText={value => handleChangeText('name', value)} />
                <TextInput style={styles.text} placeholder="Contraseña" onChangeText={value => handleChangeText('password', value)} />
            </View>
        </View>
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

export default Invitate
