import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Box } from 'react-native';
import tailwind from 'tailwind-rn';

import Carta from './carta'

export default class Tablero extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.containerTablero}>
                    {
                        this.props.baraja
                            .map((carta, index) => {
                                const estaSiendoComparada = this.props.parejaSeleccionada.indexOf(carta) > - 1;
                                return <Carta
                                    key={index}
                                    icono={carta.icono}
                                    estaSiendoComparada={estaSiendoComparada}
                                    seleccionarCarta={() => { this.props.seleccionarCarta(carta) }}
                                    fueAdivinada={carta.fueAdivinada}
                                />
                            })
                    }
                </View>
            </View>
        )
    }
}

/* Estilos */
const styles = StyleSheet.create({
    /* container: tailwind('h-full justify-center items-center bg-green-200 '), */
    containerTablero: tailwind('h-5/6 w-full flex-wrap mb-28 content-around bg-gray-700 '),
});
