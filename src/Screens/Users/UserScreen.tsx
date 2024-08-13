import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

type MenuItemProps = {
  icon: string;
  title: string;
};

const UserScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Diego Garcia</Text>
          <Text style={styles.subHeaderText}>Desarrollador de software</Text>
        </View>
        <Image
          source={{ uri: 'https://via.placeholder.com/50' }} // Reemplaza con la URL de tu imagen
          style={styles.profileImage}
        />
      </View>

      <View style={styles.menuContainer}>
        <MenuItem icon="file-text" title="Mi Hoja de Vida" />
        <MenuItem icon="cog" title="Configuración" />
        <MenuItem icon="sign-out" title="Cerrar sesión" />
      </View>
    </View>
  );
};

const MenuItem: React.FC<MenuItemProps> = ({ icon, title }) => (
  <TouchableOpacity style={styles.menuItem}>
    <View style={styles.menuIconText}>
      <FontAwesome name={icon} size={24} color="black" />
      <Text style={styles.menuText}>{title}</Text>
    </View>
    <FontAwesome name="chevron-right" size={24} color="black" />
  </TouchableOpacity>
);

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
  menuIconText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuText: {
    marginLeft: 10,
    fontSize: 16,
  },
});

export default UserScreen;
