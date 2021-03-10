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
            <Text>{iniciated.nickname}</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate("Memorize")}
                style={styles.buttons}
            >
                <Text>Memorize cards Jud</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate("Welcome")}
                style={styles.buttons}
            >
                <Text>CONDOR FLY</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: tailwind('h-full justify-center items-center bg-blue-100'),
    buttons: tailwind('p-2 bg-yellow-400 rounded m-1'),
});

export default Home;
