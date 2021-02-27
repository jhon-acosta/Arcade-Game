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

import First_Step from './screens/games/Memorize/Steps/First_Step';
import Second_Step from './screens/games/Memorize/Steps/Second_Step';
import Third_Step from './screens/games/Memorize/Steps/Third_Step';

import LevelOne from './screens/games/Memorize/Levels/levelOne/levelOne';

import Welcome from './screens/games/Strategy/components/Welcome';
import History from './screens/games/Strategy/components/History';
import GameOver from './screens/games/Strategy/screens/GameOver';

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
    {/* ============= AQUI VAN LOS PASOS DE MEMORIZE =========*/}
    <HomeStack.Screen
      name="Memorize"
      component={Memorize}
      options={{
        title: 'PRESENTACIÓN',
      }}
    />
    <HomeStack.Screen
      name="First_Step"
      component={First_Step}
      options={{
        title: 'HISTORIA DE JUD',
      }}
    />
    <HomeStack.Screen
      name="Second_Step"
      component={Second_Step}
      options={{
        title: 'HISTORIA DE JUD',
      }}
    />
    <HomeStack.Screen
      name="Third_Step"
      component={Third_Step}
      options={{
        title: 'HISTORIA DE JUD',
      }}
    />
    {/* ============= AQUI VAN LOS NIVELES DE MEMORIZE ========= */}
    <HomeStack.Screen
      name="LevelOne"
      component={LevelOne}
      options={{
        title: 'Nivel uno',
      }}
    />
    {/* ============= AQUI VA STRATEGY ========= */}
    <HomeStack.Screen
      name="Strategy"
      component={Strategy}
      options={{
        title: 'ACOMPAÑAME',
      }}
    />
    <HomeStack.Screen
      name="Welcome"
      component={Welcome}
      options={{
        title: 'COMENZO LA AVENTURA',
      }}
    />
    <HomeStack.Screen
      name="History"
      component={History}
      options={{
        title: 'HISTORIA',
      }}
    />
    <HomeStack.Screen
      name="GameOver"
      component={GameOver}
      options={{
        title: 'OOPS!',
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
