import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import tailwind from 'tailwind-rn';

import temporal_image from '../../../../assets/image_Memorize_Steps/temporal_image.jpg'


const First_Step = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/* IMAGEN */}
            <View >
                <Image
                    source={temporal_image}
                    style={styles.image}
                />
            </View>
            {/* HISTORIA */}
            <View style={styles.containerHistory}>
                <Text>Jud esta triste por que no puede  pasar los niveles de Memorize cards.</Text>
            </View>
            <View>
                <Text style={styles.textQuestion}>¿Quieres ayuarle?</Text>
            </View>
            {/* Botón al siguiente paso */}
            <View style={styles.containerButtons}>
                <TouchableOpacity onPress={() => navigation.navigate("")}
                    style={styles.buttons}>
                    <Text style={styles.textButton}>No, mas tarde</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Second_Step")}
                    style={styles.buttons}>
                    <Text style={styles.textButton}>Claro</Text>
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


export default First_Step
