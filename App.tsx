import { Text, View, StyleSheet, TextInput, Button, Image } from 'react-native'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import {MyDrawer, MyTabs} from './navigation';




export const App = () => {

  return (
    <NavigationContainer>
      <MyTabs/>
    </NavigationContainer>



  )

}




export default App