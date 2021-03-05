import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import tailwind from 'tailwind-rn';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('db.arcade');

const Home = ({ navigation }) => {
    const [iniciated, setIniciated] = useState({
        name:'user'
    });
    
    useEffect(() => {
        /*db.transaction(
           async tx => {
                //tx.executeSql('DROP TABLE arcade')
                await tx.executeSql('select * from arcade', [], (_, { rows }) =>
                    //setIniciated(rows._array)
                    console.log(rows._array)
                );
            },
            null,
        );*/
        if(iniciated.name == ''){
            navigation.push('Credentials')
        }
    })
    return (
        <View style={styles.container}>
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
    container: tailwind('h-full justify-center items-center bg-blue-400'),
    buttons: tailwind('p-2 bg-yellow-400 rounded m-1'),
});

export default Home;
