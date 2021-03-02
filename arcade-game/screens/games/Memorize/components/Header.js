import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';
import tailwind from 'tailwind-rn';


export default class Header extends Component {
    render() {
        return (
            <View style={styles.containerHeader}>
                <View style={styles.viewHeader}>
                    <Text style={styles.textHeader}>Memorize Jud</Text>
                </View>
                <View style={styles.viewHeader}>
                    <Text style={styles.textHeader} >Intentos: {this.props.numeroDeIntentos}</Text>
                </View>
                <View style={styles.viewHeader}>
                    <TouchableOpacity style={styles.buttonHeader} onPress={this.props.resetearPartida}>
                        <Text style={styles.textHeader}>Reiniciar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

/* Estilos */
const styles = StyleSheet.create({
    /* Tailwind */
    /* containerHeader: tailwind('bg-red-700 flex-row items-center p-4'),
    textHeader: tailwind('text-white'),
    viewHeader: tailwind('pr-12 pl-14'), 
    buttonHeader: tailwind('bg-green-700 p-2 rounded-lg '), 
    */

    /* css */
    containerHeader: {
        backgroundColor: '#DC2626',
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        textAlign: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },
    textHeader: {
        color: '#fff',
    },
    viewHeader: {
        paddingRight: 23,
        paddingLeft: 23,
    },
    buttonHeader: {
        backgroundColor: '#047857',
        padding: 10,
        borderRadius: 5,
    }
});



