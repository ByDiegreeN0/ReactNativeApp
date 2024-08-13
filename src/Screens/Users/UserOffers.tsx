import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export const UserOffers = () => {

  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Ofertas');
};

  const title = 'Software Engineer';
  const position = 'Full-time';
  const salary = '$80,000/year';
  const city = 'New York City';
  const date = '2022-01-01';

  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>Ofertas Aplicadas</Text>
      <View style={styles.offerContainer}>
        <Text style={styles.offerTitle}>{title}</Text>
        <Text style={styles.offerText}>{position}</Text>
        <Text style={styles.offerTitle}>Salario: {salary}</Text>
        <Text style={styles.offerText}>Ciudad: {city}</Text>

        <View style={styles.offerFechaContainer}>
          <Text>Fecha de aplicación: {date}</Text>
        </View>

        <View style={styles.statusContainer}>
          <Text style={styles.statusText}>Estado: En proceso</Text>
        </View>
      </View>
      <View style={styles.offerContainer}>
        <Text style={styles.offerTitle}>{title}</Text>
        <Text style={styles.offerText}>{position}</Text>
        <Text style={styles.offerTitle}>Salario: {salary}</Text>
        <Text style={styles.offerText}>Ciudad: {city}</Text>

        <View style={styles.offerFechaContainer}>
          <Text>Fecha de aplicación: {date}</Text>
        </View>

        <View style={styles.statusContainer}>
          <Text style={styles.statusText}>Estado: En proceso</Text>
        </View>
      </View>
      <View style={styles.offerContainer}>
        <Text style={styles.offerTitle}>{title}</Text>
        <Text style={styles.offerText}>{position}</Text>
        <Text style={styles.offerTitle}>Salario: {salary}</Text>
        <Text style={styles.offerText}>Ciudad: {city}</Text>

        <View style={styles.offerFechaContainer}>
          <Text>Fecha de aplicación: {date}</Text>
        </View>

        <View style={styles.statusContainer}>
          <Text style={styles.statusText}>Estado: En proceso</Text>
        </View>
      </View>

    
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#00AF00',
  },
  offerContainer: {
    backgroundColor: '#fff',
    marginBottom: 10,
    padding: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  offerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#00AF00',
  },
  offerText: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  offerFechaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 10,
  },
  statusContainer: {
    backgroundColor: '#e8f5e9',
    padding: 8,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  statusText: {
    color: '#00AF00',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#00AF00',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'flex-end',
    marginTop: 20,
  },
});

export default UserOffers;