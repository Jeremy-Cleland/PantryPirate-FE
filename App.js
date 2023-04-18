import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Home';
import Scan from './screens/Scan';
import Item from './screens/Item';
import MyLists from './screens/MyLists';
// import MyPantry from './screens/MyPantry';
import { Pressable } from 'react-native';

const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName='Home'
      screenOptions={{headerStyle: {backgroundColor: '#EFEFE7'}, headerTintColor: 'black'}}
      >
        <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={({ navigation}) => ({
          headerRight: () => (
            <Pressable
            title="Login"
            style={{ alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 12,
            paddingHorizontal: 32,
            margin: 10,
            borderRadius: 4,
            elevation: 3,
            backgroundColor: 'black',
            }}
           
            />
          ),
        })
        }
        />
        <Stack.Screen name="Scan" component={Scan} />
        <Stack.Screen name="Item" component={Item} />
        <Stack.Screen name="MyLists" component={MyLists} />
        {/* <Stack.Screen name="MyPantry" component={MyPantry} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

