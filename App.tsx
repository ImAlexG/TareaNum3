import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inicio from './views/Inicio';
import SignIn from './views/SignIn';
import Encabezado from './components/Encabezado';
import OTP from './views/OTP';
import InformacionUser from './views/InformacionUser';
import AppNav from './views/AppNav';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer> 
      <Stack.Navigator>
        <Stack.Screen 
          name="Inicio" 
          component={Inicio} 
          options={{
            headerShown: false, 
          }}
        />
        <Stack.Screen 
          name='SignIn' 
          component={SignIn} 
          options={{
            header: ({navigation, route, options}) => <Encabezado />,
          }}
        />
        <Stack.Screen 
          name='OTP' 
          component={OTP} 
          options={{
            header: ({navigation, route, options}) => <Encabezado />,
          }}
        />
        <Stack.Screen 
          name='InformacionUser' 
          component={InformacionUser} 
          options={{
            header: ({navigation, route, options}) => <Encabezado />,
          }}
        />
        <Stack.Screen 
          name='AppNav' 
          component={AppNav} 
          options={{
            header: ({navigation, route, options}) => <Encabezado />, 
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;