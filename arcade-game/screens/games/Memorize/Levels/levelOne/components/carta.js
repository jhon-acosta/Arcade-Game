import React, { Component } from 'react';
import { View, StyleSheet, Text, Touchable, TouchableOpacity, } from 'react-native';
import tailwind from 'tailwind-rn';
import CardFlip from 'react-native-card-flip';
import FlipCard from 'react-native-flip-card'

export default class Carta extends Component {
    render() {
        return (
            <View style={styles.cardContainer} onPress={this.props.seleccionarCarta}>
                <FlipCard onFlipEnd={(isFlipEnd) => { this.props.estaSiendoComparada || this.props.fueAdivinada, console.log('isFlipEnd', isFlipEnd) }}>
                    <View style={[styles.card, styles.card1]}>
                        <Text style={styles.label}>Toca</Text>
                    </View>
                    <View style={[styles.card, styles.card2]}>
                        <Text style={styles.label}>{this.props.icono}</Text>
                    </View>
                </FlipCard>
            </View>
        )
    }
}

/* Estilos con tailwind */
/* const styles = StyleSheet.create({
    card: tailwind('w-16  h-16 bg-yellow-400 m-2'),

});
*/

/* Estilos con css */

const styles = StyleSheet.create({
    cardContainer: {
        width: 60,
        height: 60,
        margin: 10,
        /* Quitar esto cuando este listo */
        /* backgroundColor: 'white', */
    },
    card: {
        width: 60,
        height: 60,
        /* Color rojo de tailwind */
        backgroundColor: '#7F1D1D',
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },
    card1: {
        /* Color rojo de tailwind */
        backgroundColor: '#7F1D1D',
    },
    card2: {
        /* Color gris de tailwind */
        backgroundColor: '#111827',
    },
    label: {
        textAlign: 'center',
        fontFamily: 'System',
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
});
