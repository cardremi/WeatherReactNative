import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Main from '../Features/Main'
import Weather from '../Features/Weather'
import { color } from 'react-native-reanimated';

const Stack = createStackNavigator();

const Nav = () => {
  return (
    <Stack.Navigator
    screenOptions={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'tomato' },
      }}>
      <Stack.Screen
        component={Main}
        name="Main"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={Weather}
        name="Weather"
        options={{headerShown: true}}
      
      />
      
    </Stack.Navigator>
  );
};
export default Nav;
