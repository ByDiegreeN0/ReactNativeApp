// src/Navigation/MyTabs.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../Screens/HomePage';
import UserScreen from '../Screens/Users/UserScreen';
import UserOffers from '../Screens/Users/UserOffers';
import UserCV from '../Screens/Users/UserCV';

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={HomePage}
                options={{
                    tabBarStyle: { display: 'flex' }
                }}
            />


            <Tab.Screen
                name="Ofertas Aplicadas"
                component={UserOffers}
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

            <Tab.Screen
                name="Hoja de Vida"
                component={UserCV}
                options={{
                    tabBarStyle: { display: 'flex' }
                }}
            />
        </Tab.Navigator>
    );
}

export default MyTabs;
