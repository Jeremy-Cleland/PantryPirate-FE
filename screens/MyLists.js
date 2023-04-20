import { Text, View, Pressable, StyleSheet } from 'react-native';
import axios from 'axios';
import React, { useEffect, useState } from 'react';


export default function MyLists({ navigation, route }) {
  const [userList, setUserList] = useState(null);
  const [message, setMessage] = useState(null);
  const [showLists, setShowLists] = useState(true);



  const getUserLists = async () => {
    try {
      const username = 'testUser'
      const userListFromDB = await axios.get(`https://pantrypirate.onrender.com/list/${username}`);
      setUserList(userListFromDB.data);
      // console.log('userList ------->>', userListFromDB);
    } catch (error) {
      console.log('List Screen error----->>>', error);
    }
  }
  useEffect(() => {
    getUserLists();
  }, []);

  const handleSelectList = async (list, item) => {
    try {
      const url = `https://pantrypirate.onrender.com/list/${list._id}`;
      // console.log('url ------->>', url);
      const itemToUpdate = { items: [...list.items, item] }
      // console.log('itemToUpdate ------->>', itemToUpdate);

      await axios.put(url, itemToUpdate);

      setMessage(`Added ${item} to ${list.name}`);
      setShowLists(false);
      setTimeout(() => {
        setMessage(null);
        setShowLists(true);
        navigation.reset({
          index: 0,
          routes: [{name: 'Home'}, { name: 'Scan' }],
        });
      }, 3000);

    } catch (error) {
      console.log('handleSelectList error----->>>', error);
    }

  }

  const handleEdit = (list) => {
    navigation.navigate('EditList', { list });
  }

  const handleViewList = async (list) => {
    navigation.navigate('ListDetails', { list });
  }

  const handleAddList = () => {
    navigation.navigate('AddList');
  }


  if (route.params) {
    const { response } = route.params;
    const item = response.SearchResult.Items[0].ItemInfo.Title.DisplayValue;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Select List</Text>
        {message && <Text>{message}</Text>}
        {showLists && userList && userList.map((list, idx) => {
          return (
            <Pressable
              key={`list-${idx}`}
              style={styles.button}
              onPress={() => handleSelectList(list, item)}
            >
              <Text style={styles.text}>{list.name}</Text>
            </Pressable>
          );
        })}
      </View>
    )
  }
  if (!route.params) {

    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Pressable style={styles.button} onPress={handleAddList}>
            <Text style={styles.text}>Create New List</Text>
          </Pressable>
        </View>
        {userList && userList.map((list, idx) => {
          return (
            <View key={`edit-${idx}`} style={styles.listContainer}>
              <Pressable style={styles.button} onPress={() => handleViewList(list)}>
                <Text style={styles.text}>{list.name} - View Items</Text>
              </Pressable>
              <Pressable style={styles.button} onPress={() => handleEdit(list)}>
                <Text style={styles.text}>Edit Members</Text>
              </Pressable>
            </View>
          );
        })}
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EFEFE7', 
    flex: 1
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 5,
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    margin: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#000',
    color: 'black',
  },
  text: {
    color: 'white'
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 20,
  },

});