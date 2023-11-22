import * as React from 'react';
import { TextInput } from 'react-native-paper';
import { StyleSheet } from 'react-native';

interface InputProps {
  label: string;
}

const Input: React.FC<InputProps> = ({ label }) => {
  const [text, setText] = React.useState('');

  return (
    <TextInput
        style={styles.input}
      label={label}
      value={text}
      onChangeText={(inputText) => setText(inputText)}
      secureTextEntry      
      theme={{ colors: { primary: '#1976D2' } }}
    />
  );

  
};
const styles = StyleSheet.create({
  input:{
    backgroundColor: '#fff'
  }
})

export default Input;
