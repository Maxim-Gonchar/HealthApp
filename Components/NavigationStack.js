import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Medication } from "./Medication/Medication"
import { Details } from './Medication/Details';

const Stack = createStackNavigator();

export const NavigationStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#242F3D",
        },
        headerTintColor: "#F5F5F5",
      }}>
      <Stack.Screen name="Medication" component={Medication} />
      <Stack.Screen name="Medication details" component={Details} />
    </Stack.Navigator>
  )
}


