import { Text, View, StyleSheet, Button, Image, Dimensions } from 'react-native';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import image from '../assets/PantryPirateLogo.png';

export default function Item({ navigation, route }) {
  const { data } = route.params;
  const [response, setResponse] = useState({});

  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  let imageWidth = 0;
  let imageHeight = 0;

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
        // console.log('response ------->>',response);
        setResponse(axiosResponse.data);
        imageWidth = axiosResponse.data.SearchResult.Items[0].Images.Primary.Large.Width;
        imageHeight = axiosResponse.data.SearchResult.Items[0].Images.Primary.Large.Height;
        console.log('imageWidth', imageWidth);
        console.log('imageHeight', imageHeight);
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
      {response.SearchResult ? (
        <View>
          <Image src={response.SearchResult.Items[0].Images.Primary.Large.URL ? response.SearchResult.Items[0].Images.Primary.Large.URL : image } style={{ width: 250, height: 250, resizeMode: 'center' }} />
          <Text style={styles.text}>Item: {response.Errors === undefined ? response.SearchResult.Items[0].ItemInfo.Title.DisplayValue : 'Not Found'}</Text>
        </View>
      ) : (
        <Text>Sorry, but this item was not found.</Text>
      )}
      <Button title="Rescan" onPress={handleScanButton} />
      <Button title="Add to List" onPress={handleListButton} />

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});