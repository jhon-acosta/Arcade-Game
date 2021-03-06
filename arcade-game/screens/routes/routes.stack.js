import React from 'react';
import { StyleSheet, Text } from 'react-native';
import tailwind from 'tailwind-rn';
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
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Stack = createStackNavigator();

const HomeStack = ({ navigation }) => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    title: <Text onPress={() => navigation.openDrawer()} style={styles.text}><MaterialCommunityIcons name="hamburger" size={35} style={styles.icon} /> INICIO</Text>,
                    headerStyle: {
                        height: 75,
                        backgroundColor: '#60a5fa'
                    },
                    /*headerRight: () => (
                        <Text style={styles.bgColor} >
                            <MaterialCommunityIcons name="hamburger" size={35} style={styles.icon} />
                        </Text>
                      ),*/
                }} />
            <Stack.Screen
                name="Credentials"
                component={Credentials}
                options={{
                    title: <Text style={styles.text}>MODO DE INICIO</Text>,
                    headerStyle: {
                        height: 75,
                        backgroundColor: '#60a5fa'
                    },
                    headerLeft:''
                }} />
            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    title: <Text style={styles.text}>INICIA SESIÓN</Text>,
                    headerStyle: {
                        height: 75,
                        backgroundColor: '#60a5fa'
                    },
                    headerLeft:''
                }} />
            <Stack.Screen
                name="Register"
                component={Register}
                options={{
                    title: <Text style={styles.text}>REGÍSTRATE</Text>,
                    headerStyle: {
                        height: 75,
                        backgroundColor: '#60a5fa'
                    },
                    headerLeft:''
                }} />
            <Stack.Screen
                name="Invitate"
                component={Invitate}
                options={{
                    title: <Text style={styles.text}>MODO INVITADO</Text>,
                    headerStyle: {
                        height: 75,
                        backgroundColor: '#60a5fa'
                    },
                    headerLeft:''
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

const ProfileStack = ({ navigation }) => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Profile"
                component={Profile}
                options={{
                    title: <Text onPress={() => navigation.openDrawer()} style={styles.text}><MaterialCommunityIcons name="hamburger" size={35} style={styles.icon} /> PERFIL</Text>,
                    headerStyle: {
                        height: 75,
                        backgroundColor: '#60a5fa'
                    },
                }} />
        </Stack.Navigator>
    );
}

const GlobalScoreStack = ({ navigation }) => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="GlobalScore"
                component={GlobalScore}
                options={{
                    title: <Text onPress={() => navigation.openDrawer()} style={styles.text}><MaterialCommunityIcons name="hamburger" size={35} style={styles.icon} /> PUNTOS GLOBALES</Text>,
                    headerStyle: {
                        height: 75,
                        backgroundColor: '#60a5fa'
                    },
                }} />
        </Stack.Navigator>
    );
}


const styles = StyleSheet.create({
    bgColor: tailwind('flex h-full w-14 mt-2'),
    icon: tailwind('flex text-yellow-400 items-center'),
    text: tailwind('flex text-white items-center pb-2'),
});

export { HomeStack, ProfileStack, GlobalScoreStack }
