import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';

const LoginScreen = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = () => {
    // Lógica para autenticação
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
        theme={{ colors: { primary: '#1976D2' } }}
      />

      <TextInput
        label="Senha"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        style={styles.input}
        theme={{ colors: { primary: '#1976D2' } }}
      />

      <Button
        mode="contained"
        onPress={handleLogin}
        style={[styles.button, { backgroundColor: '#2196F3' }]}
      >
        Entrar
      </Button>

      <View style={styles.forgotRegisterContainer}>
        <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
        
        <Text style={styles.register}>Cadastrar-se</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  input: {
    marginBottom: 12,
    backgroundColor: '#fff'
  },
  button: {
    marginTop: 16,
  },
  forgotRegisterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  forgotPassword: {
    color: '#1976D2', // Azul primário
  },
  or: {
    marginHorizontal: 10,
  },
  register: {
    color: '#1976D2', // Azul primário
  },
});

export default LoginScreen;
