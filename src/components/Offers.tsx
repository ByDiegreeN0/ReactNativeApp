import React from 'react';
import { Text, View, StyleSheet, Pressable, Alert } from 'react-native';

const Offers = ({ title, position, salary, city, date}) => {

  // todo el codigo que se muestra en el return, son los props, para colocar los datos que deseas mostrar en la lista de ofertas
  return (
    <View style={styles.offerContainer}>
      <Text style={styles.offerTitle}>{title}</Text>
      <Text style={styles.offerText}>{position}</Text>
      <Text style={styles.offerTitle}>Salario: {salary}</Text>
      <Text style={styles.offerText}>Ciudad: {city}</Text>

      <View style={styles.offerFechaContainer}>
        <Text>Fecha: {date}</Text>
      </View>
  
      <Pressable style={styles.offerButton}>
        <Text style={styles.offerButtonText}>Aplicar Ahora</Text>
      </Pressable>
    </View>
  );
};

export default Offers;

const styles = StyleSheet.create({
  offerContainer: {
    backgroundColor: '#fff',
    marginBottom: 10,
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 5,
    shadowColor: '#000',
  },
  offerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#00AF00',
  },
  offerText: {
    marginBottom: 5,
  },
  offerFechaContainer: {
    flex: 1,
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  offerButton: {
    backgroundColor: '#00AF00',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
  },
  offerButtonText: {
    fontSize: 16,
    color: '#fff',
  },
});
