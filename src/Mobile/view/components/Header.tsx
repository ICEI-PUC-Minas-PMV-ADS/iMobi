import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#d3d3d3" />
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#d3d3d3',
    padding: 15,
    alignItems: 'center',
  },
  headerText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Header;
