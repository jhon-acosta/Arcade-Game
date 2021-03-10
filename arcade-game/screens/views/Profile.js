import React, { useEffect, useContext, useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import tailwind from 'tailwind-rn';
import * as SQLite from 'expo-sqlite';
const db = SQLite.openDatabase('db.arcade');

import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Profile = ({ navigation }) => {

    const [show, setShow] = useState(false)
    const [profile, setProfile] = useState({
        id: '',
        name: '',
        lastname: '',
        nickname: '',
        email: '',
        password: '',
        age: '',
    });

    const getData = async () => {
        await db.transaction(
            tx => {
                tx.executeSql('select * from arcade', [], (_, { rows }) =>
                    rows._array[0] !== undefined ? setProfile({
                        id: rows._array[0].id,
                        name: rows._array[0].name,
                        lastname: rows._array[0].lastname,
                        nickname: rows._array[0].nickname,
                        email: rows._array[0].email,
                        password: rows._array[0].password,
                        age: rows._array[0].age,
                    }) : navigation.navigate('Credentials')
                );
            },
            null,
        );
    }

    const logout = () => {
        db.transaction(
            tx => {
                tx.executeSql('DROP TABLE arcade')
            },
            null,
        );
        navigation.push('Home');
    }

    useEffect(() => {
        getData();
    }, [])
    return (
        <View style={styles.container}>
            <FontAwesome5 name="user-astronaut" size={100} style={styles.icon} />
            <TouchableOpacity style={styles.logoutButton} onPress={() => logout()}>
                <Text>CERRAR SESION</Text>
            </TouchableOpacity>
            <Text style={styles.profile}>Nombre:     {`${profile.name}  ${profile.lastname}`}</Text>
            <Text style={styles.profile}>Apodo:       {profile.nickname}</Text>
            <Text style={styles.profile}>Edad:          {profile.age}</Text>
            <Text style={styles.profile}>Correo:      {profile.email}</Text>
            <Text style={styles.profile} onPress={() => setShow(true)}>Contraseña:    {show == true ? profile.password : '**********   '} <Ionicons name="md-eye" size={24} color="white" /> </Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: tailwind('flex h-full justify-center items-center bg-yellow-100 p-5'),
    logoutButton: tailwind('flex items-center justify-center w-32 py-3 mt-1 bg-blue-400 rounded mb-1'),
    profile: tailwind('bg-blue-400 text-white  w-full p-5 border-l-4 text-xl border-yellow-400'),
    icon: tailwind('bg-yellow-400 text-white p-5 rounded-full')

});

export default Profile;
