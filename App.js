import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Home';
import Scan from './screens/Scan';
import Item from './screens/Item';
import MyLists from './screens/MyLists';
import ListDetails from './screens/ListDetails';
// import MyPantry from './screens/MyPantry';
import { Text, View, Button  } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { useState, useEffect } from 'react';
const Stack = createNativeStackNavigator();

WebBrowser.maybeCompleteAuthSession();

export default function App() {
  const [token, setToken] = useState("");
  const [userInfo, setUserInfo] = useState(null);

  // TODO -- still need ClientId
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: '195320080095-s0qof8ubhocft58n1het8ek209tr0ek9.apps.googleusercontent.com',
    iosClientId: '195320080095-dh8hm108646qcrbjr1nbdgj3mm1sthna.apps.googleusercontent.com',
  });

  useEffect(() => {
    if (response?.type === "success") {
      setToken(response.authentication.accessToken);
      getUserInfo();
    }
  }, [response, token]);

  const getUserInfo = async () => {
    try {
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const user = await response.json();
      setUserInfo(user);
    } catch (error) {
      // Add your own error handler here
    }
  };
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{ headerStyle: { backgroundColor: '#EFEFE7' }, headerTintColor: 'black' }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              <View style={styles.container}>
                {userInfo === null ? (
                  <Button
                    title="Sign in with Google"
                    disabled={!request}
                    onPress={() => {
                      promptAsync();
                    }}
                  />
                ) : (
                  <Text style={styles.text}>{userInfo.name}</Text>
                )}
              </View>
              // <Pressable
              //   title="Login"
              //   style={{
              //     alignItems: 'center',
              //     justifyContent: 'center',
              //     paddingVertical: 12,
              //     paddingHorizontal: 32,
              //     margin: 10,
              //     borderRadius: 4,
              //     elevation: 3,
              //     backgroundColor: 'black',
              //   }}

              // />
            ),
          })
          }
        />
        <Stack.Screen name="Scan" component={Scan} />
        <Stack.Screen name="Item" component={Item} />
        <Stack.Screen name="MyLists" component={MyLists} />
        <Stack.Screen name="ListDetails" component={ListDetails} />
        {/* <Stack.Screen name="MyPantry" component={MyPantry} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

