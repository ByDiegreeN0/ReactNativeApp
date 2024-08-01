import { Text, View, StyleSheet, TextInput, Button, Image } from 'react-native'
import React, { Component } from 'react'

export const login = () => {

  return (


    <View style={styles.container}>
   
      <View style={styles.content} >
        <Image  style={styles.image} source={require('../../assets/img/iglogo.png')}></Image>
        <Text style={styles.title}>Inicia sesion para ver fotos y videos de tus amigos</Text>
       
        <TextInput
          style={styles.input}
          placeholder='correo electronico'
        />

      

        <TextInput
          style={styles.input}
          placeholder='Contraseña'
        />

      
        <Button
          title="Entrar"
        />
      </View>

  
    </View>
  )

}

const styles = StyleSheet.create({


  image: {
    width: '100%', 
    height: 80,
   },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  content: {
    width: 300,
    padding: 20,
    borderBlockColor: '#ddd',
    borderWidth: 1,
    borderLeftColor: '#ddd',
    borderRightColor: '#ddd',

  },

  title: {
    fontSize: 18,
    textAlign: 'center',
    padding: 15
  },


  input: {
    width: '100%',
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    height: 33,
    marginTop: 12,
    borderRadius: 5,
  },

  bottom: {
    marginTop: 10,
    padding: 10,
    width: 300,
    height: 40,
    flex: 1,
    alignItems: 'center',
    borderBlockColor: '#ddd',
    borderWidth: 1,
    borderLeftColor: '#ddd',
    borderRightColor: '#ddd',
  }






});


export default login