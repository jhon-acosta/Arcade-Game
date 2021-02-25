import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import tailwind from 'tailwind-rn';
import Header from '../../components/Header';
import Tablero from './components/tablero';
import construirBaraja from './construirBarja';


const getEstadoInicial = () => {
    const baraja = construirBaraja();
    return {
        baraja,
/*         parejaSeleccionada: [],
        estaComparando: false, */
        numeroDeIntentos: 15
    };
}

export default class LevelOne extends Component {
    constructor(props) {
        super(props);
        this.state = getEstadoInicial();
    }
    render() {
        return (
            <View style={styles.container}>
                <Header
                    numeroDeIntentos={this.state.numeroDeIntentos}
                    resetearPartida={() => this.resetearPartida()}
                />
                <Tablero
                    baraja={this.state.baraja}
                />
            </View>
        )

    }
}

/* const seleccionarCarta = async (carta) =>{
    if (
      this.state.estaComparando ||
      this.state.parejaSeleccionada.indexOf(carta) > -1 ||
      carta.fueAdivinada
    ) {
      return;
    }
    const parejaSeleccionada = [...this.state.parejaSeleccionada, carta];
    this.setState({
      parejaSeleccionada
    })

    if (parejaSeleccionada.length === 2) {
      this.compararPareja(parejaSeleccionada);
    }
  } */

/* Estilos */
const styles = StyleSheet.create({
    /* container: tailwind('h-full justify-center items-center'), */
    buttons: tailwind('p-2 bg-yellow-400 w-24 items-center rounded m-1'),

});
