// src/Navigation/MyStack.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Register from '../Screens/Register';
import Login from '../Screens/Login';
import MyTabs from './TabsNavigation';
import UserCV from '../Screens/Users/UserCV';
import UserOffers from '../Screens/Users/UserOffers';

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Register" 
                component={Register} 
                options={{ headerShown: false }} 
            />
            <Stack.Screen 
                name="Iniciar Sesion" 
                component={Login} 
                options={{ headerShown: false }} 
            />
            <Stack.Screen 
                name="Ofertas" 
                component={MyTabs} 
                options={{ headerShown: false }} 
            />
            <Stack.Screen 
                name="UserOffers"
                component={UserOffers}
                options={{ headerShown: false }} 
            />
            <Stack.Screen 
                name="UserCV"
                component={UserCV}
                options={{ headerShown: false }} 
            />
        </Stack.Navigator>
    );
}

export default MyStack;
