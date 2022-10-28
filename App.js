import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Flex from './screens/Flex';
import {Login} from './screens/Login';
import isLogged from './screens/Login';
import Todo from './screens/Todo';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tab from './screens/Tab';
import Product from './screens/Product';


export default function App() {

  const Stack = createNativeStackNavigator();
  // const isLogged = getStorage();
  

  return (
    // initialRouteName='Login'
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
        }}>

       {isLogged ? 
        <Stack.Screen name='Home' component={Tab}></Stack.Screen> : 
        <Stack.Screen name='Login' component={Login}></Stack.Screen>
       }
    
        {/* <Stack.Screen name='Home' component={Tab} options={{
          headerBackVisible: false,
          headerShown: false
        }}></Stack.Screen> */}


        <Stack.Screen name='Product' component={Product} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    backgroundColor: '#fff',
  },
});
