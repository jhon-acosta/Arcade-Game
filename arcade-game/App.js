import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import Home from './screens/Home';
import Memorize from './screens/games/Memorize/Memorize';
import Strategy from './screens/games/Strategy/Strategy';
import Profile from './screens/Profile';
import GlobalScore from './screens/GlobalScore';

const Tabs = createBottomTabNavigator();

const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const GlobalStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="Home"
      component={Home}
      options={{
        title: 'INICIO',
      }}
    />
    <HomeStack.Screen
      name="Memorize"
      component={Memorize}
      options={{
        title: 'MEMORIZA LAS CARTAS',
      }}
    />
    <HomeStack.Screen
      name="Strategy"
      component={Strategy}
      options={{
        title: 'AYUDA A BIRD',
      }}
    />
  </HomeStack.Navigator>
)

const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen
      name="Profile"
      component={Profile}
      options={{
        title: 'PERFIL DE USUARIO',
      }}
    />
  </ProfileStack.Navigator>
)

const GlobalStackScreen = () => (
  <GlobalStack.Navigator>
    <GlobalStack.Screen
      name="GlobalScore"
      component={GlobalScore}
      options={{
        title: 'PUNTIACION GLOBAL',
      }}
    />
  </GlobalStack.Navigator>
)

const App = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            title: 'INICIO',
            tabBarIcon: () => <Ionicons name="home" size={24} color="black" />
          }} />
        <Tabs.Screen
          name="Profile"
          component={ProfileStackScreen}
          options={{
            title: 'PERFIL',
            tabBarIcon: () => <FontAwesome name="user" size={24} color="black" />
          }} />
        <Tabs.Screen
          name="GlobalScore"
          component={GlobalStackScreen}
          options={{
            title: 'PUNTOS GLOBALES',
            tabBarIcon: () => <Fontisto name="world" size={23} color="black" />
          }} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

export default App;
