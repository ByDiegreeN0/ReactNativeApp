import { Text, View, StyleSheet, TextInput, Button, Image } from 'react-native'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import {MyDrawer, MyTabs} from './navigation';
import { UserOffers} from './src/Screens/Users/UserOffers';




export const App = () => {

  return (
    <NavigationContainer>
      <UserOffers/>
    </NavigationContainer>



  )

}




export default App