import { Text, View } from 'react-native';
import axios from 'axios';
import React, { useEffect, useState } from 'react';


export default function MyLists() {
const[userList, setUserList] = useState(null);
// const { response } = route.params;

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

return(
<View>
  {userList && userList.map((list) => {
    return <Text>{list._id}</Text>
  })}
</View>
)


}