import { Text, View, StyleSheet, TextInput,Image, ScrollView, Pressable } from 'react-native'
import React, { Component } from 'react'
import { useNavigation } from '@react-navigation/native';


export const Register = () => {

  const navigation = useNavigation();

  const handlePress = () => {
      navigation.navigate('Iniciar Sesion');
  };

  return (

    <View>
      <ScrollView>
        <View style={styles.container}>


          <View style={styles.content} >
            <Image style={styles.image} source={require('../../assets/img/logoSena.png')}></Image>
            <Text style={styles.title}>El mejor portal de empleo SENA</Text>
          
            <TextInput
              style={styles.input}
              placeholder='correo electronico'
              keyboardType="email-address"
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
              secureTextEntry={true}
            />

            <Pressable style={styles.registerButton} onPress={handlePress}>
                <Text style={styles.registerText}>Registrarse</Text>
            </Pressable>

          

          </View>

          <View style={styles.bottom}>
            <Text>¿Tienes una cuenta? <Pressable onPress={handlePress} style={styles.link}>Entrar</Pressable></Text>
          </View>
        </View>
      </ScrollView>
    </View>

  )

}

const styles = StyleSheet.create({


  image: {
    width: 200,
    height: 200,
    margin: 20,
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    padding: 20,
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
  },

  registerButton: {
    backgroundColor: '#00AF00',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
  },

  registerText: {
    fontSize: 16,
    color: '#fff',
  },

  link: {
    color: '#00AF00',
    marginTop: 10,
    marginBottom: 10,
  }






});


export default Register