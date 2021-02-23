import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import tailwind from 'tailwind-rn';


export default class Header extends Component {
    render() {
        return (
            <View style={styles.containerHeader}>
                <View >
                    <Text style={styles.textHeader}>Memorize Jud</Text>
                </View>
                <View style={styles.viewHeader}>
                    <Text style={styles.textHeader} >Intentos: 20</Text>
                </View>
                <View >
                    <TouchableOpacity style={styles.buttonHeader}>
                        <Text style={styles.textHeader}>Reiniciar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

/* Estilos */
const styles = StyleSheet.create({
    containerHeader: tailwind('bg-red-700 flex-row items-center p-4'),
    textHeader: tailwind('text-white'),
    viewHeader: tailwind('pr-12 pl-14'),
    buttonHeader: tailwind('bg-green-700 p-2 rounded-lg ')

});

