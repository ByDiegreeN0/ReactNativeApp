import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

type MenuItemProps = {
  icon: string;
  title: string;
  screen?: string; // Hacer screen opcional
  onPress: () => void; // Cambiar a función sin argumentos
};

const UserScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Diego García</Text>
          <Text style={styles.subHeaderText}>Desarrollador de software</Text>
        </View>
        <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.profileImage} />
      </View>
      <View style={styles.menuContainer}>
        <MenuItem icon="file-text" title="Mi Hoja de Vida" onPress={() => navigation.navigate('UserCV')} />
        <MenuItem icon="newspaper-o" title="Ofertas Aplicadas" onPress={() => navigation.navigate('UserOffers')} />
        <MenuItem icon="cog" title="Configuración" onPress={() => {/* Agregar acción aquí */}} />
        <MenuItem icon="sign-out" title="Cerrar sesión" onPress={() => {/* Agregar acción aquí */}} />
      </View>
    </View>
  );
};

const MenuItem: React.FC<MenuItemProps> = ({ icon, title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.menuItem}>
        <FontAwesome name={icon} size={24} color="black" />
        <Text style={styles.menuItemText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  headerTextContainer: {
    flexDirection: 'column',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "#00AF00",
  },
  subHeaderText: {
    fontSize: 16,
    color: '#888',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  menuContainer: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  menuItemText: {
    marginLeft: 10,
    fontSize: 16,
  },
});

export default UserScreen;
