import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './Login';
import Register from './Register';
import HomeLoader from './HomeLoader';
import CV from './cv';

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen 
                name="Inicio" 
                component={HomeLoader} 
                options={{ 
                    tabBarStyle: { display: 'none' } 
                }} 
            />
            <Tab.Screen 
                name="Registrarse" 
                component={Register} 
                options={{ 
                    tabBarStyle: { display: 'flex' } 
                }} 
            />
            <Tab.Screen 
                name="Iniciar Sesion" 
                component={Login} 
                options={{ 
                    tabBarStyle: { display: 'flex' } 
                }} 
            />
            <Tab.Screen 
                name="Hoja de Vida" 
                component={CV} 
                options={{ 
                    tabBarStyle: { display: 'flex' } 
                }} 
            />
        </Tab.Navigator>
    );
}

export default MyTabs;
