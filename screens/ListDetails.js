import { View, Text, Button } from 'react-native'
import axios from 'axios';
import { useState } from 'react';


export default function ({ navigation, route }) {
  const [list, SetList] = useState(route.params.list);

handleDeleteItem = (item) => {
  const index = list.items.indexOf(item);
  if (index !== -1) {
    const newList = [...list.items];
    newList.splice(index, 1);
    const updatedList = { ...list, items: newList };
    axios.put(`https://pantrypirate.onrender.com/list/${list._id}`, updatedList)
      .then(() =>{
        SetList(updatedList);
      })
      .catch((err) => console.log(err))
}
}
  return (
    <View>
      {list.items.map((item, idx) => {
        return (
          <View key={`item-${idx}`}>
            <Text>{item}</Text>
            <Button title="Delete" onPress={() => handleDeleteItem(item)} />
          </View>)
      })}
      <Button title="Back to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  )
}