import { Text, View, StyleSheet, Button } from 'react-native';

export default function Item({ navigation, route }) {
  const { itemData } = route.params;

  const handleScanButton = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Scan' }],
    });
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Item: {itemData}</Text>
      <Button title="Rescan" onPress={handleScanButton} />
    </View>
  );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    }
  });