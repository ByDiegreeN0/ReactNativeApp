import { Text, View, Image, StyleSheet, ScrollView } from 'react-native'
import React, { Component } from 'react'

export const cv = () => {
    return (
        
        <View style={style.container}>
            <ScrollView>
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
                    <Text style={style.ContentText}>+57 000 0000000</Text>
                </View>

                <View style={style.Content} >
                    <Text style={style.ContentText}>Email</Text>
                    <Text style={style.ContentText}>diegoalejandrogarcia140902@gmail.com</Text>
                </View>

                <View style={style.Content} >
                    <Text style={style.ContentText}>Dirección</Text>
                    <Text style={style.ContentText}>cll 00a #00a-00</Text>
                </View>
            </View>

            <View>
                <Text style={style.Header}>Perfil Profesional</Text>
                <Text></Text>
            </View>

            <View>
                <Text style={style.Header}>Skills</Text>

                <View style={style.Content} >
                    <Text style={style.ContentText}>Lenguaje</Text>
                    <Text style={style.ContentText}>Años</Text>
                </View>

                <View style={style.Content} >
                    <Text style={style.ContentText}>HTML</Text>
                    <Text style={style.ContentText}>6</Text>
                </View>

                <View style={style.Content} >
                    <Text style={style.ContentText}>CSS</Text>
                    <Text style={style.ContentText}>6</Text>
                </View>

                <View style={style.Content} >
                    <Text style={style.ContentText}>JavaScript</Text>
                    <Text style={style.ContentText}>6</Text>
                </View>

                <View style={style.Content} >
                    <Text style={style.ContentText}>React</Text>
                    <Text style={style.ContentText}>2</Text>
                </View>

                <View style={style.Content} >
                    <Text style={style.ContentText}>PHP</Text>
                    <Text style={style.ContentText}>3</Text>
                </View>

                <View style={style.Content} >
                    <Text style={style.ContentText}>Laravel</Text>
                    <Text style={style.ContentText}>2</Text>
                </View>

                <View style={style.Content} >
                    <Text style={style.ContentText}>Python</Text>
                    <Text style={style.ContentText}>1</Text>
                </View>

                <View style={style.Content} >
                    <Text style={style.ContentText}>Django</Text>
                    <Text style={style.ContentText}>0.6</Text>
                </View>

                <View style={style.Content} >
                    <Text style={style.ContentText}>Java</Text>
                    <Text style={style.ContentText}>0.6</Text>
                </View>
            </View>

            </ScrollView>

           


        </View>
    )

}


const style = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
    },

    ImgContainer: {
        width: '100%',
        height: '100%',
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
        paddingTop: 15,
        fontSize: 16,
        fontWeight: 'bold',
    }


})

export default cv