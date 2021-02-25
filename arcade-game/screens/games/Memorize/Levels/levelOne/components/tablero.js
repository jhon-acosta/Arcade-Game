import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Box } from 'react-native';
import tailwind from 'tailwind-rn';

import Carta from './carta'
import { Ionicons } from '@expo/vector-icons';

export default class Tablero extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.containerTablero}>
                {
                  this.props.baraja
                        .map((carta) => <Carta icono={carta.icono}/>)
                }
                </View>
            </View>
        )
    }
}

/* Estilos */
 const styles = StyleSheet.create({
    container: tailwind('h-full justify-center items-center bg-green-200 '),
    containerTablero: tailwind('h-5/6 w-5/6 flex-wrap mb-28 content-around bg-gray-700 '),
});
