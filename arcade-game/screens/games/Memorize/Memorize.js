import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import tailwind from 'tailwind-rn';


const Memorize = ({ navigation }) => {
    return (
        <View style={styles.container
        }>
            <Text>BIENVENIDO AL JUEGO DE MEMORIZAR CARTAS</Text>
            {/* Botón al siguiente paso */}
            <View>
                <TouchableOpacity onPress={() => navigation.navigate("First_Step")}
                    style={styles.buttons}>
                    <Text>EMPEZAR</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

/* Estilos */
const styles = StyleSheet.create({
    container: tailwind('h-full justify-center items-center'),
    buttons: tailwind('p-2 bg-yellow-400 w-24 items-center rounded m-1'),

});


export default Memorize


