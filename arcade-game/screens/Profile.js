import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import tailwind from 'tailwind-rn';
import * as SQLite from 'expo-sqlite';
import { StackActions } from '@react-navigation/native';

const db = SQLite.openDatabase('db.arcade');

const Profile = ({ navigation }) => {
    const initialUser = {
        id: '',
        name: '',
        lastname: '',
        nickname: '',
        age: '',
        email: '',
        password: ''
    }
    const [user, setUser] = useState(initialUser)

    const getUser = () => {
    }

    const logout = () => {
        db.transaction(
            tx => {
                tx.executeSql('DROP TABLE arcade')
            },
            null,
        );
        navigation.navigate('Home');
    }
    return (
        <View style={styles.container}>
            <Text>
                Perfil de Usuario
            </Text>
            <TouchableOpacity style={styles.logoutButton} onPress={()=>logout()}>
                <Text >CERRAR SESION</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: tailwind('flex h-full justify-center items-center bg-yellow-400'),
    logoutButton: tailwind('flex items-center justify-center w-32 py-3 mt-5 bg-blue-400 rounded mb-1'),
});

export default Profile;
