import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { FIREBASE_AUTH } from '../../firebase';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleRegister =  async () => {
    const auth = FIREBASE_AUTH;
    // Implement your login logic here
    console.log('Email:', email);
    console.log('Password:', password);
    try {
        const response = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        )
        navigation.navigate('Home');
        console.log("Register Successful.")
    } catch (error) {
        alert("Register failed.\n" + error.message);
    }

  };
  const handleLogin =  async () => {
    const auth = FIREBASE_AUTH;
    // Implement your login logic here
    console.log('Email:', email);
    console.log('Password:', password);
    try {
        const response = await signInWithEmailAndPassword(
            auth,
            email,
            password
        )
        navigation.navigate('Home');
        console.log("Login Successful")
    } catch (error) {
        alert("Sign in failed\n" + error.message);
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
        secureTextEntry
      />

      <View style={styles.buttonContainer}>
      <Button title="Register" onPress={handleRegister}/>
      <Button title="Login" onPress={handleLogin}/>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    height: 100,
    justifyContent: "space-evenly",
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default Login;