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
        parejaSeleccionada: [],
        estaComparando: false,
        numeroDeIntentos: 18
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
                    parejaSeleccionada={this.state.parejaSeleccionada}
                    seleccionarCarta={(carta) => this.seleccionarCarta(carta)}
                />
            </View>
        )

    }

    seleccionarCarta(carta) {
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
    }

    compararPareja(parejaSeleccionada) {
        this.setState({ estaComparando: true });

        setTimeout(() => {
            const [primeraCarta, segundaCarta] = parejaSeleccionada;
            let baraja = this.state.baraja;

            if (primeraCarta.icono === segundaCarta.icono) {
                baraja = baraja.map((carta) => {
                    if (carta.icono !== primeraCarta.icono) {
                        return carta;
                    }

                    return { ...carta, fueAdivinada: true };
                });
            }
            if (this.state.numeroDeIntentos === 1) {
                Swal.fire({
                    title: 'Fuiste muy lento y te contagiaste del virus',
                    icon: 'warning',
                    iconHtml: '😷',
                    confirmButtonText: 'Reiniciar',
                    cancelButtonText: 'Inicio',
                    showCancelButton: true,
                    showCloseButton: true
                })
                    .then((result) => {
                        if (result.isConfirmed) {
                            window.location.href = '/level_one'
                            //getEstadoInicial();
                        } else {
                            window.location.href = '/'
                        }
                    })
            }
            this.verificarSiHayGanador(baraja);
            this.setState({
                parejaSeleccionada: [],
                baraja,
                estaComparando: false,
                numeroDeIntentos: this.state.numeroDeIntentos - 1
            })
        }, 1000)
    }

    resetearPartida() {
        this.setState(
            getEstadoInicial()
        );
    }
}
/* Estilos */
const styles = StyleSheet.create({
    /* container: tailwind('h-full justify-center items-center'), */
    buttons: tailwind('p-2 bg-yellow-400 w-24 items-center rounded m-1'),

});
