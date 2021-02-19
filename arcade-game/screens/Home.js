import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import tailwind from 'tailwind-rn';

const Home = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => navigation.navigate("Memorize")}
                style={styles.buttons}
                >
                <Text>Ayuda a Javi Bros a no perder la memoria</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate("Strategy")}
                style={styles.buttons}
                >
                <Text>Flip Bird</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: tailwind('h-full justify-center items-center bg-blue-400'),
    buttons:tailwind('p-2 bg-yellow-400 rounded m-1')
  });

export default Home;
