import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//import {createDrawernavigator } from '@react-navigation/drawer';
import {SignIn, CreateAccount, SearchTags, SearchList, SignInAccount} from './screens/SignIn';
//import {CreateAccount} from './screens/CreateAccount';

const AuthStack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const SearchStack = createStackNavigator();

const SignInScreen = () => {
  return(
  <AuthStack.Navigator>
    <AuthStack.Screen name='SignIn' component={SignIn}/>
    <AuthStack.Screen name='CreateAccount' component={CreateAccount}/> 
    <AuthStack.Screen name='SignInAccount' component={SignInAccount}/> 
  </AuthStack.Navigator>
  );
}

const SearchScreen = () => {
  return(
  <SearchStack.Navigator>
    <SearchStack.Screen name='Search By Tags' component={SearchTags}/>
    <SearchStack.Screen name='SearchList' component={SearchList}/> 
  </SearchStack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen name='Home' component={SignInScreen} />
        <Tabs.Screen name='Search' component={SearchScreen} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;