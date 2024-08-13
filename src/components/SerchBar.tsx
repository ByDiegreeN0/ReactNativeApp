import { Text, View, StyleSheet, TextInput, Image, ScrollView, Pressable } from 'react-native'
import React, { Component } from 'react'


export const SearchBar = () => {

    return (

        <View style={styles.container}>

            <TextInput
                style={styles.input}
                placeholder='Buscar Ofertas'
            />
            <Pressable style={styles.SearchButton}>
                <Text style={styles.SearchButtonText}>Buscar</Text>
            </Pressable>
        </View>

    )

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingTop: 10,
        backgroundColor: '#fff',
        marginBottom: 10,
        paddingBottom: 10,
        paddingHorizontal: 10,
        margin: 10,
        borderRadius: 5,
    
    },

    input: {
        width: '80%',
        borderColor: '#ddd',
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
        height: 33,
        marginTop: 12,
        borderRadius: 5,
    },


    SearchButton: {
        padding: 10,
        backgroundColor: '#00AF00',
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
      },
    
      SearchButtonText: {
        fontSize: 16,
        color: '#fff',
      }





});


export default SearchBar