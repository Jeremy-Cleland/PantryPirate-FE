import { Text, View, Button } from 'react-native';
import axios from 'axios';
import React, { useEffect, useState } from 'react';


export default function MyLists({ navigation, route }) {
  const [userList, setUserList] = useState(null);


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

      navigation.reset({
        index: 0,
        routes: [{name: 'Home'}, { name: 'Scan' }],
      });


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
      <View>
        {userList && userList.map((list, idx) => {
          return <Button key={`list-${idx}`} title={`${list.name}`} onPress={() => handleSelectList(list, item)} />
        })}
        <Text>{item}</Text>
      </View>
    )
  }
  if (!route.params) {

    return (
      <View>
        <View style={{flexDirection: 'row', justifyContent: 'center' }}>
          <Button title="Create New List" onPress={handleAddList}  />
        </View>
        {userList && userList.map((list, idx) => {
          return (

            <View key={`edit-${idx}`} style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: 5}}>
              <Button title={`${list.name}  -  View Items`} onPress={() => handleViewList(list)} />
              <Button title="Edit Members" onPress={() => handleEdit(list)} />
            </View>
          )
        })}
      </View>
    )
  }
}