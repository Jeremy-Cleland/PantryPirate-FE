import { View, Text, StyleSheet, Image, Pressable, Dimensions } from 'react-native';
import image from '../assets/PantryPirateLogo.png';

export default function HomeScreen({ navigation }) {

  const handleScanButton = () => {
    navigation.navigate('Scan');
  }
  const screenWidth = Dimensions.get('window').width;
  const imageWidth = screenWidth * 0.9;
  const screenHeight = Dimensions.get('window').height;
  const imageHeight = screenHeight * 0.3;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#EFEFE7' }}>
      <Pressable style={styles.login} title="Login">
        <Text style={{color: 'white'}}>Login</Text>
      </Pressable>
      <Image source={image} style={{width: imageWidth , height: imageHeight}} />
      <Pressable style={styles.scan} title="Scan" onPress={handleScanButton} >
        <Text style={{color: 'white'}}>Scan</Text>
      </Pressable>
     
    </View>
)
};

const styles = StyleSheet.create({
  scan: {
    
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
    color: 'white',
  },
  login: {
    position: 'absolute',
    top: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
    color: 'white',
  }
});