import { Text, View, StyleSheet, Pressable, Image } from 'react-native';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import image from '../assets/PantryPirateLogo.png';

export default function Item({ navigation, route }) {
  const { data } = route.params;
  const [response, setResponse] = useState({});

  const handleScanButton = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }, { name: 'Scan' }],
    });
  }

  const handleListButton = () => {
    navigation.navigate('MyLists', { response });
  }

  useEffect(() => {
    const getData = async () => {

      try {

        const axiosResponse = await axios.get(`https://pantrypirate.onrender.com/products/${data}`);
        setResponse(axiosResponse.data);

      } catch (error) {
        console.log('error----->>>', error);
      }
    };

    if (data) {
      getData();
    }
  }, [data]);



  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={handleScanButton}>
        <Text style={styles.buttonText}>Rescan</Text>
      </Pressable>
      <View style={styles.center}>
        {response.SearchResult ? (
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: response.SearchResult.Items[0].Images.Primary.Large.URL || image }}
              style={styles.image}
            />
            <Text style={styles.text}>Item: {response.Errors === undefined ? response.SearchResult.Items[0].ItemInfo.Title.DisplayValue : 'Not Found'}</Text>
          </View>
        ) : (
          <Text>Sorry, but this item was not found.</Text>
        )}
      </View>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={handleListButton}>
          <Text style={styles.buttonText}>Add to List</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EFEFE7'
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: 'center',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 32,
  },
  button: {
    backgroundColor: 'black',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  imageContainer: {
    justifyContent: 'center', 
    alignItems: 'center'
  },
});