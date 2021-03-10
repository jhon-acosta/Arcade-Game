import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import tailwind from 'tailwind-rn';
import * as SQLite from 'expo-sqlite';
const db = SQLite.openDatabase('db.arcade');

const Home = ({ navigation }) => {

    const [iniciated, setIniciated] = useState({
        nickname: ''
    });

    const getData = async () => {
        await db.transaction(
            tx => {
                tx.executeSql('CREATE TABLE IF NOT EXISTS arcade(id INT, name TEXT, lastname TEXT, nickname TEXT, email TEXT, password TEXT, age TEXT)');
                tx.executeSql('select * from arcade', [], (_, { rows }) =>
                    rows._array[0] !== undefined ? setIniciated({ nickname: rows._array[0].nickname }) : navigation.navigate('Credentials')
                );
            },
            null,
        );
    }

    useEffect(() => {
        getData();
    })

    return (
        <View style={styles.container}>
            <Text style={{textTransform:'uppercase', margin:2, fontFamily:"Lucida Console"}}>{iniciated.nickname}</Text>

            <TouchableOpacity
                onPress={() => navigation.navigate("Memorize")}
                style={styles.card1}
            >
                <Text style={{fontSize:50, textAlign:'center',  color:'white'}}>JUD</Text>
                <Text style={{textAlign:'center'}}>Memorizalo</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate("Welcome")}
                style={styles.card2}
            >
                <Text style={{fontSize:50,  textAlign:'center', color:'white'}}>CONDOR FLY</Text>
                <Text style={{textAlign:'center'}}>Ayudalo</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate("Welcome")}
                style={styles.card3}
            >
                <Text style={{fontSize:50,  textAlign:'center', color:'white'}}>AHORCADO</Text>
                <Text style={{textAlign:'center'}}>Salvalo</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: tailwind('h-full justify-center items-center bg-blue-100'),
    card1: tailwind('bg-yellow-500 w-full p-10'),
    card2: tailwind('bg-blue-500 w-full p-10'),
    card3: tailwind('bg-red-500 w-full p-10 '),
    circles: tailwind('flex rounded-full p-5 text-xl items-center justify-center')
});

export default Home;
