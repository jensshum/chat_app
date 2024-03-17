import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const MenuIcon = ({ navigation }) => {
    return (
      <Ionicons
        name="menu"
        size={24}
        color="black"
        style={{ marginLeft: 10 }}
        onPress={() => navigation.navigate('Login')}
      />
    );
  };

  export default MenuIcon;