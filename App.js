import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import 'react-native-gesture-handler';

import Home from './src/Pages/Home.js';
import HaveAccount from './src/Pages/HaveAccount.js';
import CreateAccount from './src/Pages/CreateAccount.js';
import Login from './src/Pages/Login.js'

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
           <NavigationContainer>
           <Stack.Navigator
          initialRouteName="HaveAccount"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="HaveAccount" component={HaveAccount} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="CreateAccount" component={CreateAccount} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
