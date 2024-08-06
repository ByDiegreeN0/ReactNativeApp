import React from 'react';
import { Text, View, StyleSheet, ImageBackground, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeLoader = () => {
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate('Iniciar Sesion');
    };

    return (
        <View style={styles.container}>
            <View style={styles.imgBackgroundContainer}>
                <ImageBackground source={require('../../assets/img/React.png')} resizeMode='cover' style={styles.img} />
            </View>
            <Text style={styles.containerText}>DiegoApp</Text>
            <Pressable style={styles.button} onPress={handlePress}>
                <Text style={styles.buttonText}>Entrar en la aplicacion</Text>
            </Pressable>
        </View>
    );
};

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
        padding: 15,
        borderRadius: 10,
        marginTop: 20,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 30,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
    }
});

export default HomeLoader;
