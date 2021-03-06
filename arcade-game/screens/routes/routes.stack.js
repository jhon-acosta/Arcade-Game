import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//Components
import GlobalScore from '../views/GlobalScore';
import Home from '../views/Home';
import Profile from '../views/Profile';
import Credentials from '../sessions/Credentials';
import Login from '../sessions/Login';
import Register from '../sessions/Register';
import Invitate from '../sessions/Invitate';

import Welcome from '../../screens/games/Strategy/screens/Welcome';
import History from '../../screens/games/Strategy/screens/History';
import GameOver from '../../screens/games/Strategy/screens/GameOver';

import First_Step from '../../screens/games/Memorize/Steps/First_Step';
import Second_Step from '../../screens/games/Memorize/Steps/Second_Step';
import Third_Step from '../../screens/games/Memorize/Steps/Third_Step';

import LevelOne from '../../screens/games/Memorize/Levels/levelOne/levelOne';

import Memorize from '../../screens/games/Memorize/Memorize';
import Strategy from '../../screens/games/Strategy/Strategy';

//Icons
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


const Stack = createStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    title: 'INICIO',
                    tabBarIcon: () => <Ionicons name="home" size={24} color="black" />
                }} />
            <Stack.Screen
                name="Credentials"
                component={Credentials}
                options={{
                    title: 'INICIAR SESION',
                    tabBarIcon: () => <Ionicons name="home" size={24} color="black" />
                }} />
            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    title: 'INICIAR SESION',
                    tabBarIcon: () => <Ionicons name="home" size={24} color="black" />
                }} />
            <Stack.Screen
                name="Register"
                component={Register}
                options={{
                    title: 'INICIAR SESION',
                    tabBarIcon: () => <Ionicons name="home" size={24} color="black" />
                }} />
            <Stack.Screen
                name="Invitate"
                component={Invitate}
                options={{
                    title: 'INICIAR SESION',
                    tabBarIcon: () => <Ionicons name="home" size={24} color="black" />
                }} />
            {/* ============= AQUI VAN LOS PASOS DE MEMORIZE =========*/}
            <Stack.Screen
                name="Memorize"
                component={Memorize}
                options={{
                    title: 'PRESENTACIÓN',
                }}
            />
            <Stack.Screen
                name="First_Step"
                component={First_Step}
                options={{
                    title: 'HISTORIA DE JUD',
                }}
            />
            <Stack.Screen
                name="Second_Step"
                component={Second_Step}
                options={{
                    title: 'HISTORIA DE JUD',
                }}
            />
            <Stack.Screen
                name="Third_Step"
                component={Third_Step}
                options={{
                    title: 'HISTORIA DE JUD',
                }}
            />
            {/* ============= AQUI VAN LOS NIVELES DE MEMORIZE ========= */}
            <Stack.Screen
                name="LevelOne"
                component={LevelOne}
                options={{
                    title: 'Nivel uno',
                }}
            />
            {/* ============= AQUI VA STRATEGY ========= */}
            <Stack.Screen
                name="Strategy"
                component={Strategy}
                options={{
                    title: 'ACOMPAÑAME',
                }}
            />
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{
                    title: 'COMENZO LA AVENTURA',
                }}
            />
            <Stack.Screen
                name="History"
                component={History}
                options={{
                    title: 'HISTORIA',
                }}
            />
            <Stack.Screen
                name="GameOver"
                component={GameOver}
                options={{
                    title: 'OOPS!',
                }}
            />
        </Stack.Navigator>
    );
}

const ProfileStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Profile"
                component={Profile}
                options={{
                    title: 'PERFIL',
                    tabBarIcon: () => <FontAwesome name="user" size={24} color="black" />
                }} />
        </Stack.Navigator>
    );
}

const GlobalScoreStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="GlobalScore"
                component={GlobalScore}
                options={{
                    title: 'PUNTOS GLOBALES',
                    tabBarIcon: () => <Fontisto name="world" size={23} color="black" />
                }} />
        </Stack.Navigator>
    );
}

export { HomeStack, ProfileStack, GlobalScoreStack }
