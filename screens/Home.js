import { View, Text, Button } from 'react-native';



export default function HomeScreen({ navigation }) {

  const handleScanButton = () => {
    navigation.navigate('Scan');
  }
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="Scan" onPress={handleScanButton} />
    </View>
)
};