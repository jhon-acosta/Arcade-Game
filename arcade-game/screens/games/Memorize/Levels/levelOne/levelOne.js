import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import tailwind from 'tailwind-rn';
import Header from '../../components/Header'


const LevelOne = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Header />
            <Text>Aqui va el tablero</Text>
            {/* Botón al siguiente paso */}
        </View>
    )
}

/* Estilos */
const styles = StyleSheet.create({
    /* container: tailwind('h-full justify-center items-center'), */
    buttons: tailwind('p-2 bg-yellow-400 w-24 items-center rounded m-1'),

});


export default LevelOne
