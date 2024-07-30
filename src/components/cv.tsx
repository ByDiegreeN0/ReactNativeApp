import { Text, View, Image, StyleSheet } from 'react-native'
import React, { Component } from 'react'

export const cv = () => {
    return (
        <View style={style.container}>

            <View style={style.ImgContainer}>
                <Image style={style.img} source={require('../../assets/img/React.png')}></Image>
            </View>

            <View>
                <Text style={style.Header}>Datos Personales</Text>

                <View style={style.Content} >
                    <Text style={style.ContentText}>Nombre</Text>
                    <Text style={style.ContentText}>Diego Garcia</Text>
                </View>

                <View style={style.Content} >
                    <Text style={style.ContentText}>Edad</Text>
                    <Text style={style.ContentText}>18</Text>
                </View>

                <View style={style.Content} >
                    <Text style={style.ContentText}>Telefono</Text>
                    <Text style={style.ContentText}>#############</Text>
                </View>

                <View style={style.Content} >
                    <Text style={style.ContentText}>Email</Text>
                    <Text style={style.ContentText}>###</Text>
                </View>

                <View style={style.Content} >
                    <Text style={style.ContentText}>Dirección</Text>
                    <Text style={style.ContentText}>#####</Text>
                </View>
            </View>

            <View>
                <Text style={style.Header}>Perfil Profesional</Text>
                <Text></Text>
            </View>



        </View>
    )

}


const style = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
    },

    ImgContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },

    img: {
        width: 300,
        height: 300,
    },

    Header: {
        backgroundColor: '#4287f5',
        color: '#fff',
        padding: 10,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },

    Content: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

    },

    ContentText: {
        fontSize: 16,
        padding: 10,
        fontWeight: 'bold'
    }


})

export default cv