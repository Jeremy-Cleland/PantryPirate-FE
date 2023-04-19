import { View, Text, StyleSheet, Image, Pressable, Dimensions } from 'react-native';
import { useState } from 'react';
import image from '../assets/PantryPirateLogo.png';

export default function HomeScreen({ navigation }) {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginButton = () => {
    setIsLoggedIn(true);
  }
  const handleLogoutButton = () => {
    setIsLoggedIn(false);
  }

  const handleMyListsButton = () => {
    navigation.navigate('MyLists');
  }

  const handleMyPantryButton = () => {
    navigation.navigate('MyPantry');
  }

  const handleScanButton = () => {
    navigation.navigate('Scan');
  }

  const screenWidth = Dimensions.get('window').width;
  const imageWidth = screenWidth * 0.9;
  const screenHeight = Dimensions.get('window').height;
  const imageHeight = screenHeight * 0.3;

  
  if (!isLoggedIn) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#EFEFE7' }}>
        <Pressable style={styles.login} title="Login" onPress={handleLoginButton}>
          <Text style={{color: 'white'}}>Login</Text>
        </Pressable>
        <Image source={image} style={{width: imageWidth , height: imageHeight, position: 'absolute', top: 70}} />
        <Pressable style={styles.button} title="Scan" onPress={handleScanButton} >
          <Text style={{color: 'white'}}>Scan</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Pressable style={styles.login} title="Logout" onPress={handleLogoutButton}>
        <Text style={styles.loginText}>Logout</Text>
      </Pressable>
      <Image source={image} style={{width: imageWidth , height: imageHeight, position: 'absolute', top: 70}} />
      <View style={styles.buttonRow}>
        <Pressable style={styles.button} title="My Lists" onPress={handleMyListsButton} >
          <Text style={styles.buttonText}>My Lists</Text>
        </Pressable>
        <Pressable style={styles.button} title="My Pantry" onPress={handleMyPantryButton} >
          <Text style={styles.buttonText}>My Pantry</Text>
        </Pressable>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} title="Scan" onPress={handleScanButton} >
          <Text style={styles.buttonText}>Scan</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EFEFE7',
  },
  buttonRow: {
    flexDirection: 'row',
    marginTop: 20,
  },
  buttonContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    margin: 10,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  buttonText: {
    color: 'white',
  },
  login: {
    position: 'absolute',
    top: 0,
    right: 0,
    alignItems: 'center',
    width: 120,
    height: 50,
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  loginText: {
    color: 'white',
  },
});