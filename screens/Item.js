import { Text, View, StyleSheet, Button } from 'react-native';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

export default function Item({ navigation, route }) {
  const { data } = route.params;
  const [response, setResponse] = useState(null);

  const handleScanButton = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Scan' }],
    });
  }

  useEffect(() => {
    const getData = async () => {
      
      try {
      
        const response = await axios.get(`https://pantrypirate.onrender.com/products/${data}`);
        console.log('response ------->>',response);
        setResponse(response.data);
      } catch (error) {
        console.log('error----->>>',error);
      }
    };
    
    if (data) {
      getData();
    }
  }, [data]);

  return (
    <View style={styles.container}>
      {response ? (
        <Text style={styles.text}>Item: {response.items[0] !== undefined ? response.items[0].title : 'Not Found'}</Text>
      ) : (
        <Text>...Loading</Text>
      )}
      <Button title="Rescan" onPress={handleScanButton} />
    </View>
  );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    }
  });