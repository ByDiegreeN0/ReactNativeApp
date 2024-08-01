import { Text, View, StyleSheet, TextInput, Button, Image } from 'react-native'
import React, { Component } from 'react'

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


import Login from './src/components/Login'
import Register from './src/components/Register'
import Cv from './src/components/cv'


const Stack = createNativeStackNavigator();


export const App = () => {

  return (  

      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Register}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Profile" component={Cv} />
      </Stack.Navigator>
    </NavigationContainer>
  
  
  )

}




export default App