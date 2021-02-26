import React, { Component } from 'react';
import { View, StyleSheet, Text, Touchable, TouchableOpacity, } from 'react-native';
import tailwind from 'tailwind-rn';
import CardFlip from 'react-native-card-flip';


export default class Carta extends Component {
    render() {
        return (
            <View>
                <CardFlip style={styles.cardContainer} ref={(card) => this.card = card}>
                    <TouchableOpacity   activeOpacity={1}
                                         style={[styles.card, styles.card1]}
                                        onPress={() => this.card.flip()}>
                        <Text style={styles.label}>
                        Toca
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    activeOpacity={1}
                    style={[styles.card, styles.card2]}
                    onPress={() => this.card.flip()}>
                        <Text style={styles.label}>
                            {this.props.icono}
                        </Text> 
                    </TouchableOpacity>
                </CardFlip>
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
      backgroundColor: 'white',
    },
    card: {
      width: 60,
      height: 60,
      /* Color rojo de tailwind */
      backgroundColor: '#7F1D1D',
      borderRadius: 5,
      shadowColor: 'rgba(0,0,0,0.5)',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.5,
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
