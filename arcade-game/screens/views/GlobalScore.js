import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text } from 'react-native';
import tailwind from 'tailwind-rn';
import { DataTable } from 'react-native-paper';
import axios from "axios";



const GlobalScore = () => {

    const [users, setUser] = useState([])
    const [departures, setDepartures] = useState([])

    const getUsers = async () => {
        await axios.get(`${API}/users`)
            .then(users => {
                const allUsers = users.data.data;
                setUser(allUsers);
                console.log(allUsers)
            });
    }

    const getDepartures = async () => {
        await axios.get(`${API}/departures`)
            .then(departure => {
                const allDepartures = departure.data.data;
                setDepartures(allDepartures);
                console.log(allDepartures)
            });
    }

    useEffect(() => {
        getUsers()
        getDepartures()
    }, [])
    return (
        <View>
            <Text>JUD</Text>
            <Text>CONDOR FLY</Text>
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>Usuario</DataTable.Title>
                    <DataTable.Title numeric>Apodo</DataTable.Title>
                    <DataTable.Title numeric>Puntaje</DataTable.Title>
                </DataTable.Header>


                {
                    departures.map(departure => (
                        <DataTable.Row key={departures.id}>
                            <DataTable.Cell >{departure.user_id}</DataTable.Cell>
                            <DataTable.Cell >{departure.user_id}</DataTable.Cell>
                            <DataTable.Cell >{departure.score}</DataTable.Cell>
                        </DataTable.Row>
                    ))
                }
            </DataTable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: tailwind('h-full justify-center items-center'),
    textHeader: tailwind('bg-green-600 px-5 py-4 text-lg text-white font-bold')
});

export default GlobalScore;
