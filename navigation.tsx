import React from 'react';


import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Login from './src/Screens/Login';
import Register from './src/Screens/Register';
import HomePage from './src/Screens/HomePage';
import UserScreen from './src/Screens/Users/UserScreen';
import UserCV from './src/Screens/Users/UserCV';

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Registrarse"
                component={Register}
                options={{
                    tabBarStyle: { display: 'none' }
                }}
            />
            <Tab.Screen
                name="Iniciar Sesion"
                component={Login}
                options={{
                    tabBarStyle: { display: 'none' }
                }}
            />
            <Tab.Screen
                name="Ofertas"
                component={HomePage}
                options={{
                    tabBarStyle: { display: 'flex' }
                }}
            />
            <Tab.Screen
                name="Usuario"
                component={UserScreen}
                options={{
                    tabBarStyle: { display: 'flex' }
                }}
            />
        </Tab.Navigator>
    );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Dashboard" component={UserScreen} />
            <Drawer.Screen name="Hoja de Vida" component={UserCV} />
            <Drawer.Screen name="Ofertas Aplicadas" component={UserCV} />
        </Drawer.Navigator>
    );
}

export { MyTabs, MyDrawer };
