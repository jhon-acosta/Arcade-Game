import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import tailwind from 'tailwind-rn';

const Home = ({ navigation }) => {
    const [iniciated, setIniciated] = useState(user);

    const user = 'Jhon';
    
    useEffect(() => {
        if(iniciated == ''){
            navigation.push("Credentials")
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
