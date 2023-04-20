import { View, Text, Pressable } from 'react-native'
import axios from 'axios';
import { useState } from 'react';


export default function ({ navigation, route }) {
  const [list, SetList] = useState(route.params.list);

  const handleDeleteItem = (item) => {
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
    <View style={{backgroundColor: '#EFEFE7', flex: 1}}>
      {list.items.map((item, idx) => {
        return (
          <View key={`item-${idx}`} style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: 5}}>
            <Text style={{width: '60%'}}>{item}</Text>
            <Pressable
              style={{
                backgroundColor: 'black',
                padding: 10,
                borderRadius: 5,
              }}
              onPress={() => handleDeleteItem(item)}
            >
              <Text style={{color: 'white'}}>Delete</Text>
            </Pressable>
          </View>
        )
      })}
    </View>
  )
}
