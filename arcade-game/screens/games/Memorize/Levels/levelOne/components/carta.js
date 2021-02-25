import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, } from 'react-native';
import tailwind from 'tailwind-rn';

import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';


export default class Carta extends Component {
    render() {
        return (
            <View style={styles.card}>
                <Text>
                    {this.props.icono}
                </Text>
            </View>
        )
    }
}

/* Estilos */
const styles = StyleSheet.create({
    card: tailwind('w-16  h-16 bg-yellow-400 m-2'),

});
