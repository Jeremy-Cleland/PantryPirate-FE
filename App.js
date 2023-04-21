import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Home';
import Scan from './screens/Scan';
import Item from './screens/Item';
import MyLists from './screens/MyLists';
import ListDetails from './screens/ListDetails';
import AddList from './screens/AddList';
import EditList from './screens/EditList';
import Login from './screens/Login';
import EditPantry from './screens/EditPantry';
import AddPantry from './screens/AddPantry';
import PantryDetails from './screens/PantryDetails';
import MyPantry from './screens/MyPantry';
import PantryToList from './screens/PantryToList';



const Stack = createNativeStackNavigator();



export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{ headerStyle: { backgroundColor: '#EFEFE7' }, headerTintColor: 'black' }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}

        />
        <Stack.Screen name="Scan" component={Scan} />
        <Stack.Screen name="Item" component={Item} />
        <Stack.Screen name="MyLists" component={MyLists} />
        <Stack.Screen name="ListDetails" component={ListDetails} />
        <Stack.Screen name="AddList" component={AddList} />
        <Stack.Screen name='EditList' component={EditList} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='MyPantry' component={MyPantry} />
        <Stack.Screen name='EditPantry' component={EditPantry} />
        <Stack.Screen name='AddPantry' component={AddPantry} />
        <Stack.Screen name='PantryDetails' component={PantryDetails} />
        <Stack.Screen name='PantryToList' component={PantryToList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

