import React from 'react';
import { View, ScrollView, StyleSheet, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const UserCard = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.content}> 
          <Text style={styles.title}># Ofertas Aplicadas</Text>
          <Text style={styles.cardText}>4</Text>
        </View>

        <View style={styles.content}> 
          <Text style={styles.title}># Ofertas en proceso</Text>
          <Text style={styles.cardText}>2</Text>
        </View>

        <View style={styles.content}> 
          <Text style={styles.title}># Ofertas Canceladas</Text>
          <Text style={styles.cardText}>8</Text>
        </View>

        <Pressable style={styles.cardButton} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.cardButtonText}>Ver más Ofertas</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 10,
    margin: 20,
    borderRadius: 5,
    backgroundColor: '#fff',
    shadowColor: '#000',  
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.25, 
    shadowRadius: 4,  
  },
  title: {
    fontSize: 18,
    color: '#00AF00',
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  cardText: {
    textAlign: 'center',
    fontSize: 20,
  },
  cardButton: {
    backgroundColor: '#00AF00',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginHorizontal: 20, 
    marginBottom: 20, 
  },
  cardButtonText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default UserCard;
