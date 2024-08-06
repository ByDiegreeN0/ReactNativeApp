import { Text, View, StyleSheet, TextInput, Button, Image, Pressable, ImageBackground } from 'react-native'
import React, { Component } from 'react'

export const login = () => {

    return (


        <View style={styles.container}>

            <View style={styles.imgBackgroundContainer}>
                <ImageBackground source={require('../../assets/img/React.png')} resizeMode='cover' style={styles.img}></ImageBackground>
            </View>


            <Text style={styles.containerText}>DiegoApp</Text>
            <Pressable style={styles.button}>Entrar en la aplicacion</Pressable>


        </View>
    )

}

const styles = StyleSheet.create({


    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#111111',
    },

    containerText: {
        color: '#FFFFFF',
        fontSize: 60,
    },

    imgBackgroundContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    img: {
        width: 300,
        height: 300,
        

    },

    button: {
        backgroundColor: '#4287f5',
        color: '#FFFFFF',
        padding: 15,
        borderRadius: 10,
        marginTop: 20,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 30,
    }







});


export default login