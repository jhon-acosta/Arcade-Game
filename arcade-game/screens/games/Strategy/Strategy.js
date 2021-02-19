import React from 'react';
import { StyleSheet, View, Text } from 'react-native'
import tailwind from 'tailwind-rn';

const Strategy = ({ navegation }) => {
    return (
        <View style={styles.container}>
            <View>
                <Text>Juego de ESTRATEGIA</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: tailwind('h-full justify-center items-center bg-gray-200')
  });

 export default Strategy;

