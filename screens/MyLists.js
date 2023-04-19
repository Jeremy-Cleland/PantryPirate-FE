import { Text, View, Button } from 'react-native';
import axios from 'axios';
import React, { useEffect, useState } from 'react';


export default function MyLists({ route }) {
const[userList, setUserList] = useState(null);


const getUserLists = async () => {
  try {
    const username = 'testUser'
    const userListFromDB = await axios.get(`https://pantrypirate.onrender.com/list/${username}`);
    setUserList(userListFromDB.data);
    console.log('userList ------->>', userListFromDB);
} catch (error) {
  console.log('List Screen error----->>>', error);
}
}
useEffect(() => {
  getUserLists();
}, []);


if (route.params) {
  const { response } = route.params;
  const item = response.SearchResult.Items[0].ItemInfo.Title.DisplayValue;
  return (
    <View>
    {userList && userList.map((list, idx) => {
      return <Button key={`list-${idx}`} title={`${list._id}`}/>
    })}
    <Text>{item}</Text>
  </View>
  )
}
if (!route.params) {

  return (
<View>
  {userList && userList.map((list, idx) => {
    return <Button key={`list-${idx}`} title={`${list._id}`}/>
  })}
</View>
  )
}



}