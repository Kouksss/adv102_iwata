import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    if (email != '' && password != '') {
      alert('Login Successful!');
    } else {
      alert('Please enter your email and password!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={login}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 700,
  },
  input: {
    width: '50%',
    padding: 10,
    marginTop: 20,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  buttonContainer: {
    paddingTop: 20,
  },
  button: {
    width: 80,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    cursor: 'pointer',
    backgroundColor: 'skyblue',
  },
  buttonText: {
    fontSize: 15,
  },
});