// src/Navigation/MyTabs.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../Screens/HomePage';
import UserScreen from '../Screens/Users/UserScreen';

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator>
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

export default MyTabs;
