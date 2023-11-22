import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Provider as PaperProvider } from 'react-native-paper';

import HomeScreen from '../view/pages/Home';
import ProfileScreen from '../view/pages/Perfil';

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator: React.FC = () => {
  return (
    <PaperProvider>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="black"
        inactiveColor="black"        
        barStyle={{ backgroundColor: '#d3d3d3' }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="person" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </PaperProvider>
  );
};

export default BottomTabNavigator;
