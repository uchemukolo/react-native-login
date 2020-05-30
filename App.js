import * as React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';


export default function App() {
  return (
    <KeyboardAvoidingView behavior='null' style={styles.container}>
    <View>
    <Text style={styles.logo}>Pulse</Text>
    <Text style={styles.welcome}>Welcome to Pulse, Please Login</Text>
   
      <View style={styles.subContainer}>
        <TextInput style={styles.input} placeholder='username 0r email' />
        <TextInput style={styles.input} placeholder='password' />
        <TouchableOpacity style={styles.button}> 
          <Text>Login</Text>
          </TouchableOpacity>
      </View>
      </View>
    </KeyboardAvoidingView> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    color: '#f3f3f5',
    backgroundColor: '#f3f3f5',
  },
  subContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: '#11be9f',
    fontWeight: 'bold',
   
  },
  welcome: {
    textAlign: 'center',
    color: '#8DC7B9',
    marginBottom: 5,
  },
  input: {
    width: 300,
    height: 40,
    borderColor: '#dbe5e3',
    backgroundColor: '#e4efed',
    borderWidth: 1,
    marginBottom: 20
  },
  button: {
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: "#8DC7B9",
    padding: 10,
    width: 300,
    height: 60,
    fontWeight: 'bold',
    borderRadius: 5,
  }
});
