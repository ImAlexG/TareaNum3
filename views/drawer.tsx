import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import AppNav from './AppNav'; 
import Inicio from './Inicio';


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Inicio">
        <Drawer.Screen 
          name="Inicio" 
          component={Inicio} 
        />
        <Drawer.Screen 
          name="Perfil" 
          component={AppNav} 
        />
        
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigator;
