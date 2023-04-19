import React, { useState } from 'react';
import { View, Button, TextInput } from 'react-native';
import axios from 'axios';

export default function EditList({ navigation, route }) {

  const [listName, setListName] = useState(route.params.list.name);
  const [members, setMembers] = useState(route.params.list.members.join(' ').replace('testUser', ''));

  const handleUpdateSubmit = async () => {
    try {
      console.log('1 -------------')
      let membersArr = members.split(' ').filter((member) => member !== '');

      const updatedList = { ...route.params.list, name: listName, members: [...membersArr, 'testUser'] };
      console.log('2 -------------', updatedList)
      await axios.put(`https://pantrypirate.onrender.com/list/${updatedList._id}`, updatedList);
      console.log('3 -------------')
      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }, { name: 'MyLists' }],
      });
    } catch (error) {
      console.log('handleUpdateSubmit error----->>>', error)
    }

  }

  const handleDeleteSubmit = async () => {
    await axios.delete(`https://pantrypirate.onrender.com/list/${route.params.list._id}`)

    navigation.reset({
      index: 0,
      routes: [{ name: 'MyLists' }],
    });
  }
  return (
    <View>
      <TextInput
        placeholder="List Name"
        value={listName}
        onChangeText={setListName}
      />
      <TextInput
        placeholder="Add Members"
        value={members}
        onChangeText={setMembers}
      />
      <Button title="Update List" onPress={handleUpdateSubmit} />
      {route.params.list.creator === 'testUser' &&
        <Button title="Delete List" onPress={handleDeleteSubmit} />
      }
    </View>
  )


}