import React from 'react';
import { Button } from 'react-native-paper';

interface InputProps {
    label: string;
    onPress: any;
  }
  

const BlueButton: React.FC<InputProps> = ({ label, onPress }) => {
  return (
    <Button
      mode="contained"
      buttonColor="#007AFF" // Cor azul
      style={{ marginVertical: 10, paddingVertical: 5 }}
      onPress={onPress}
    >
      {label}
    </Button>
  );
};

export default BlueButton;
