import { Text, View, StyleSheet, TextInput, Button, Image } from 'react-native'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/components/StackNavigation'




export const App = () => {

  return (
    <NavigationContainer>
      <StackNavigation/>
    </NavigationContainer>



  )

}




export default App