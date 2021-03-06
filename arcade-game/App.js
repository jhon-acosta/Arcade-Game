import React from 'react'
import { StyleSheet } from 'react-native';
import { HomeStack, ProfileStack, GlobalScoreStack } from "./screens/routes/routes.stack";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from "@react-navigation/drawer";

import tailwind from 'tailwind-rn';

import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerStyle={styles.bgColor}>
        <Drawer.Screen
          name="Home"
          component={HomeStack}
          options={{

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
  )
}

const styles = StyleSheet.create({
  bgColor: tailwind('flex h-full bg-blue-200 w-48 content-between'),
});

export default App
