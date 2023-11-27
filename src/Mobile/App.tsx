// MyScreen.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './router/BottomTabs';
import Header from './view/components/Header';

const MyScreen: React.FC = () => {
  return (
    <NavigationContainer>
      <Header title="iMobi" />
      <BottomTabNavigator />
    </NavigationContainer>
  );
};

export default MyScreen;
