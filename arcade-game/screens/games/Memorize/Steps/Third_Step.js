import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import tailwind from 'tailwind-rn';

import temporal_image from '../../../../assets/image_Memorize_Steps/temporal_image.jpg'
const Third_Step = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/* IMAGEN */}
            <View>
                <Image
                    source={temporal_image}
                    style={styles.image}
                />
            </View>
            {/* HISTORIA */}
            <View style={styles.containerHistory}>
                <Text>-Encuentra los pares.</Text>
                <Text>-Tienes un número de movimientos.</Text>
            </View>
            {/* BOTÓN AL SIGUIENTE PASO */}
            <View style={styles.containerButtons} >
            <TouchableOpacity onPress={() => navigation.navigate("")}
                    style={styles.buttons}>
                    <Text style={styles.textButton}>Ya no quiero</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Play")}
                    style={styles.buttons}>
                    <Text style={styles.textButton}>Jugar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

/* Estilos */
const styles = StyleSheet.create({
    container: tailwind('h-full justify-center items-center'),
    image: tailwind('h-60 w-52'),
    /* Estilos del contenedos Historia */
    containerHistory: tailwind('w-52 pt-4 pb-2'),
    textQuestion: tailwind('p-4'),
    /* Estilos del contenedos de los botones */
    buttons: tailwind('p-2 bg-red-700 w-24 items-center rounded m-1'),
    textButton: tailwind('text-white'),
    containerButtons: tailwind('flex-row'),
});


export default Third_Step
