import React from 'react'
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Dashboard } from "./Dashboard/Dashboard"
import { Calendar } from "./Calendar/Calendar"
import { NavigationStack } from './NavigationStack';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


export const MainScreen = () => {
  const Tab = createBottomTabNavigator();
  return (
    <View style={styles.container}>
      <NavigationContainer >
        <Tab.Navigator
          screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle: { backgroundColor: "black" },
            headerStyle: {
              backgroundColor: "#242F3D",
            },
            headerTintColor: "#F5F5F5",
            tabBarActiveTintColor: 'blue',
            tabBarInactiveTintColor: 'white',
          }}
        >
          <Tab.Screen name="Home" component={Dashboard}
            options={{ tabBarIcon: ({ color, size }) => (<FontAwesome name="home" color={color} size={size} />) }}
          />
          <Tab.Screen name="MedicationScreen"
            component={NavigationStack}
            options={{ tabBarIcon: ({ color, size }) => (<FontAwesome5 name="pills" color={color} size={size} />), headerShown: false }}
          />
          {/* <Tab.Screen name="Calendar" component={Calendar}
            options={{ tabBarIcon: ({ color, size }) => (<FontAwesome name="calendar" color={color} size={size} />) }}
          /> */}
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
})