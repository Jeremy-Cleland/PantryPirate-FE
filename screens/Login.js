import { TextInput, View, Pressable, StyleSheet, Text } from 'react-native';
import { useState } from 'react';
import axios from 'axios';


// const bcrypt = require('bcryptjs');



export default function Login({ navigation }) {


  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUserSubmit = async () => {

    try {

      let userInfo = { email: username, password: password };
      let axiosResponse = await axios.post('https://pantrypirate.onrender.com/user', userInfo);

      if (password === axiosResponse.data[0].password) {
        console.log('User is authenticated')
        navigation.navigate('Home', { username });
        
      } else {
        console.log('User is not authenticated')
      }
    } catch (error) {
      console.error(error);
    }

}

return (
  <View style={styles.container}>
    <View style={styles.inputContainer}>
      <Text style={styles.inputHeader}>Username</Text>
      <View style={styles.textInputContainer}>
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          style={styles.input}
        />
      </View>
    </View>
    <View style={styles.inputContainer}>
      <Text style={styles.inputHeader}>Password</Text>
      <View style={styles.textInputContainer}>
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          style={styles.input}
        />
      </View>
    </View>
    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
      <Pressable
        onPress={handleUserSubmit}
        style={({ pressed }) => [
          styles.button,
          {
            backgroundColor: pressed ? 'gray' : 'black',
          },
        ]}
      >
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>
    </View>
  </View>
)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFEFE7',

  },
  textInputContainer: {
    borderWidth: 1,
    borderColor: 'black',
    margin: 10,
    padding: 10,
  },
  inputContainer: {
    backgroundColor: 'black',
    margin: 15,
    borderRadius: 15,
    borderWidth: 1,
  },
  inputHeader: {
    marginLeft: 30,
    marginTop: 30,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#EFEFE7',
    padding: 5,
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});