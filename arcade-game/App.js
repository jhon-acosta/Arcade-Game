import React from 'react'
import { HomeStack, ProfileStack, GlobalScoreStack } from "./screens/routes/routes.stack";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen 
        name="Home" 
        component={HomeStack}
        options={{
          title:"INICIO"
        }}
        />
        <Drawer.Screen 
        name="Profile" 
        component={ProfileStack}
        options={{
          title:'PERFIL'
        }}
        />
        <Drawer.Screen 
        name="GloblaScore" 
        component={GlobalScoreStack} 
        options={{
          title:"PUNTUACÍON GLOBAL"
        }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App
