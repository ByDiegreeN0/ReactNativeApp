import { Text, View, StyleSheet, TextInput, Button, Image } from 'react-native'
import React, { Component } from 'react'

export const login = () => {

  return (


    <View style={styles.container}>
      <View style={styles.content} >
        <Image  style={styles.image} source={require('../../assets/img/iglogo.png')}></Image>
        <Text style={styles.title}>Registrate para ver fotos y videos de tus amigos</Text>
        <Button
          title="Iniciar sesión con Facebook"
        />
        <TextInput
          style={styles.input}
          placeholder='correo electronico'
        />

        <TextInput
          style={styles.input}
          placeholder='Nombre Completo'
        />

        <TextInput
          style={styles.input}
          placeholder='Usuario'
        />

        <TextInput
          style={styles.input}
          placeholder='Contraseña'
        />

        <Text style={styles.contentText}>
          Es posible que los usuarios de nuestro servicio hayan subido tu información de contacto en Instagram
        </Text>

        <Text style={styles.contentText}>
          Al registrarte, aceptas nuestras Condiciones, nuestra Política de privacidad y nuestra Política de cookies.
        </Text>
        <Button
          title="Ingresar"
        />

      </View>

      <View style={styles.bottom}>
        <Text>¿Tienes una cuenta? Entrar</Text>
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
    marginTop: 10,
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

  contentText: {
    fontSize: 11,
    marginBottom: 6,
    padding: 6,
    lineHeight: 20,
    textAlign: 'center'
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