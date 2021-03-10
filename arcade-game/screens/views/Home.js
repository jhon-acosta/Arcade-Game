import React, { useState, useEffect, useLayoutEffect } from 'react'
import { StyleSheet, View, Text, TouchableOpacity,Image,ImageBackground } from 'react-native';
import tailwind from 'tailwind-rn';
import condor from '../../assets/imgStrategy/condor.png';
import homeVenado from '../../assets/imgStrategy/prinVena.png';
import fondoPrincipal from '../../assets/fondoPrincipal.jpg';

import * as SQLite from 'expo-sqlite';
const db = SQLite.openDatabase('db.arcade');

const Home = ({ navigation }) => {

    const [iniciated, setIniciated] = useState({
        nickname: ''
    });

    const getData = () => {
        db.transaction(
            async tx => {
                // tx.executeSql('DROP TABLE arcade')
                // setIniciated('')
                tx.executeSql('CREATE TABLE IF NOT EXISTS arcade(id INT, name TEXT, lastname TEXT, nickname TEXT, email TEXT, password TEXT, age TEXT)');
                await tx.executeSql('select * from arcade', [], (_, { rows }) =>
                    rows._array[0] !== undefined ? setIniciated({ nickname: rows._array[0].nickname }) : navigation.navigate('Credentials')
                    //console.log(rows._array)
                );
            },
            null,
        );
    }

    useEffect(() => {
        getData();
    })

    return (
       
             <ImageBackground style={styles.container} source={fondoPrincipal}>
            <Text>{iniciated.nickname}</Text>
            <View>
                <Image
                    source={condor}
                    style={styles.image}
                />
            </View>
            <TouchableOpacity
                onPress={() => navigation.navigate("Welcome")}
                style={styles.buttons}
            >
                <Text>CONDOR FLY</Text>
            </TouchableOpacity>
            <View>
                <Image
                    source={homeVenado}
                    style={styles.image}
                />
            </View>
            <TouchableOpacity
                onPress={() => navigation.navigate("HistoryLadron")}
                style={styles.buttons}
            >
                <Text>AHORCADO</Text>
            </TouchableOpacity>
            </ImageBackground>
       
    )
}

const styles = StyleSheet.create({
    container: tailwind('h-full justify-center items-center bg-yellow-100'),
    buttons: tailwind('p-2 bg-yellow-400 rounded m-1'),
    image: tailwind('h-40 w-60'),
});

export default Home;


