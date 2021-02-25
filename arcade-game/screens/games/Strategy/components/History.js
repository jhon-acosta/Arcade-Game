import React from 'react'
import { StyleSheet, View, Text, ImageBackground, Image, Button, TouchableOpacity } from 'react-native'
import tailwind from 'tailwind-rn';
import { EvilIcons } from '@expo/vector-icons';

import background from '../../../../assets/imgStrategy/background.png'
import condorHead from '../../../../assets/imgStrategy/condorHead.png'
import dialogue from '../../../../assets/imgStrategy/dialogue.png'

const History = ({ navigation }) => {
    return (
        <ImageBackground source={background} style={styles.container}>
            <View>
                <View style={styles.imgHead}>
                    <Image source={condorHead} />
                    <Text style={{ fontFamily: 'Montserrat', color: 'black', fontSize: 20, textAlign: 'center' }}>
                        HEY, YO SOY
                     </Text>
                    <Text style={{ fontFamily: 'Montserrat', color: 'black', fontSize: 25, textAlign: 'center' }}>
                        CONDOR FLY!!
                    </Text>
                    <ImageBackground source={dialogue} style={styles.imgDialogue}>
                        <Text style={{ fontFamily: 'Montserrat', color: 'black', fontSize: 20, padding: 75, textAlign: 'center' }}>
                            MI OBJETIVO ES VOLAR POR TODOS LOS ANDES. ¿ME AYUDAS?
                        </Text>
                    </ImageBackground>
                </View>
            </View>
            <TouchableOpacity style={styles.buttonYellow}
                onPress={() => navigation.navigate("Strategy")}>
                <Text style={{ fontFamily: 'Montserrat', color: 'white', fontSize: 25 }}>JUGAR</Text>
                <EvilIcons name="play" size={50} color='white' />
            </TouchableOpacity>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    container: tailwind('h-full justify-center items-center bg-gray-200'),
    buttonYellow: tailwind('flex items-center bg-yellow-400 w-56 m-1 p-1 rounded border-l-2 border-b-2 border-yellow-500 '),
    buttons: tailwind('p-2 bg-yellow-400 rounded m-1'),
    imgHead: tailwind('w-full'),
    imgDialogue: tailwind('flex items-center justify-center w-full'),
    containerButtons: tailwind('bg-yellow-400'),
    icon: tailwind('text-red-400'),

});

export default History
