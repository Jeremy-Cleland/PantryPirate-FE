import { TextInput, View, Button } from 'react-native';
import { useState } from 'react';
import axios from 'axios';

export default function AddList({navigation}){

  const [listName, setListName] = useState('');
  const [members, setMembers] = useState('');

const handleListSubmit = () => {

  let membersArr = members.split(' ')
  const list = {creator: 'testUser', name: listName, members: [...membersArr, 'testUser']}
  axios.post('https://pantrypirate.onrender.com/list', list)
 
    navigation.reset({
      index: 0,
      routes: [{ name: 'MyLists' }],
    });


}

  return(
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
      <Button title="Add List" onPress={handleListSubmit} />
    </View>
  )
}