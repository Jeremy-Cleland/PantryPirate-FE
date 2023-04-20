import { TextInput, View, Button, StyleSheet, Text } from 'react-native';
import { useState } from 'react';
import axios from 'axios';

export default function AddList({ navigation }) {

  const [listName, setListName] = useState('');
  const [members, setMembers] = useState('');

  const handleListSubmit = () => {

    let membersArr = members.split(' ')
    const list = { creator: 'testUser', name: listName, members: [...membersArr, 'testUser'] }
    axios.post('https://pantrypirate.onrender.com/list', list)

    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }, { name: 'MyLists' }],
    });


  }

  return (
    <View>
      <Text style={{marginLeft: 30, marginTop: 30}}>List Name</Text>
      <View style={styles.container}>
        <TextInput
          placeholder="List Name"
          value={listName}
          onChangeText={setListName}
        />
      </View>
      <Text style={{marginLeft: 30, marginTop: 30}}>Members</Text>
      <View style={styles.container}>
        <TextInput
          placeholder="Add Members"
          value={members}
          onChangeText={setMembers}
        />
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Button title="Add List" onPress={handleListSubmit} />
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
  }

});