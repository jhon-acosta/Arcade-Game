import React, { useState, useEffect } from 'react'
import { StyleSheet } from 'react-native';
import { HomeStack, ProfileStack, GlobalScoreStack } from "./screens/routes/routes.stack";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import * as SQLite from 'expo-sqlite';
const db = SQLite.openDatabase('db.arcade');

import tailwind from 'tailwind-rn';

import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { DepartureContext } from './screens/contexts/DepartureContext';

const Drawer = createDrawerNavigator();

const App = () => {

  const [userData, setUserData] = useState({
    level: 'arcade',
    time: 'arcade',
    attempts: 'arcade',
    points: 'arcade',
    user_id: 'arcade',
    game_id: 'arcade'
  });

  const getData = async () => {
    await db.transaction(
      tx => {
        tx.executeSql('select * from arcade', [], (_, { rows }) =>
          rows._array[0] !== undefined ? setUserData({
            ...userData, user_id: rows._array[0].id
          }) : navigation.navigate('Credentials')
        );
      },
      null,
    )
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <DepartureContext.Provider value={{ userData, setUserData }}>
      <NavigationContainer>
        <Drawer.Navigator drawerStyle={styles.bgColor}>
          <Drawer.Screen
            name="Home"
            component={HomeStack}
            options={{
              title: 'INICIO',
              drawerIcon: ({ tintColor }) => (
                <AntDesign name="home" size={24} style={{ color: tintColor, paddingTop: 1, }} />
              ),
            }}
          />
          <Drawer.Screen
            name="Profile"
            component={ProfileStack}
            options={{
              title: 'PERFIL',
              drawerIcon: ({ tintColor = 'black' }) => (
                <Feather name="user" size={24} color="black" style={{ color: tintColor, paddingTop: 1 }} />
              ),
            }}
          />
          <Drawer.Screen
            name="GloblaScore"
            component={GlobalScoreStack}
            options={{
              title: "P.   GLOBAL",
              drawerIcon: ({ tintColor = 'black' }) => (
                <MaterialIcons name="looks-one" size={24} color="black" style={{ color: tintColor, paddingTop: 1, }} />
              ),
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </DepartureContext.Provider>
  )
}

const styles = StyleSheet.create({
  bgColor: tailwind('flex h-full bg-blue-200 w-48 content-between'),
});

export default App
