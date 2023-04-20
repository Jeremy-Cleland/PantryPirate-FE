import React, { useState } from 'react';
import { View, Button, TextInput, StyleSheet, Text } from 'react-native';
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
      <View style={styles.delete} >
        {route.params.list.creator === 'testUser' &&
          <Button title="Delete List" onPress={handleDeleteSubmit} />
        }
      </View>
      <View style={{ marginTop: 50 }}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputHeader}>List Name</Text>
          <View style={styles.container}>
            <TextInput
              placeholder="List Name"
              value={listName}
              onChangeText={setListName}
              style={{ backgroundColor: '#EFEFE7' }}
            />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputHeader}>Members</Text>
          <View style={styles.container}>
            <TextInput
              placeholder="Add Members"
              value={members}
              onChangeText={setMembers}
              style={{ backgroundColor: '#EFEFE7', padding: 10 }}
            />
          </View>
        </View>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <Button title="Update List" onPress={handleUpdateSubmit} />


      </View>
    </View>
  )


}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'black',
    margin: 10,
    padding: 10,
  },
  delete: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  inputContainer: {
    backgroundColor: 'black', 
    margin: 15, 
    borderRadius: 15, 
    borderWidth: 1 

  },
  inputHeader: {
    marginLeft: 30, 
    marginTop: 30, 
    color: 'white'
  },

});