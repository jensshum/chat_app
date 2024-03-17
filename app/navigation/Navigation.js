import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screen/Login';
import Home from '../screen/Home';
import ProfilePicture from '../component/ProfilePicture';
import { setStatusBarBackgroundColor } from 'expo-status-bar';
import MenuIcon from '../component/MenuIcon';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} 
        options={({ navigation }) => ({
            headerRight: () => <ProfilePicture/>, 
            headerLeft: () => <MenuIcon navigation={navigation} />,
          })}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default Navigation;