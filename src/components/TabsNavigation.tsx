// src/Navigation/MyTabs.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../Screens/HomePage';
import UserScreen from '../Screens/Users/UserScreen';
import UserOffers from '../Screens/Users/UserOffers';
import UserCV from '../Screens/Users/UserCV';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={HomePage}
                options={{
                    tabBarActiveTintColor: '#00AF00',
                    tabBarInactiveTintColor: 'gray',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home-outline" color={color} size={size} />
                    ),
                    tabBarStyle: { display: 'flex' }
                }}
            />
            <Tab.Screen
                name="Ofertas Aplicadas"
                component={UserOffers}
                options={{
                    tabBarActiveTintColor: '#00AF00',
                    tabBarInactiveTintColor: 'gray',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="briefcase-outline" color={color} size={size} />
                    ),
                    tabBarStyle: { display: 'flex' }
                }}
            />


            <Tab.Screen
                name="Hoja de Vida"
                component={UserCV}
                options={{
                    tabBarActiveTintColor: '#00AF00',
                    tabBarInactiveTintColor: 'gray',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="document-outline" color={color} size={size} />
                    ),
                    tabBarStyle: { display: 'flex' }
                }}
            />


            <Tab.Screen
                name="Usuario"
                component={UserScreen}
                options={{
                    tabBarActiveTintColor: '#00AF00',
                    tabBarInactiveTintColor: 'gray',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="person-outline" color={color} size={size} />
                    ),
                    tabBarStyle: { display: 'flex' }
                }}
            />

        </Tab.Navigator>
    );
}

export default MyTabs;
