import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './components/HomeScreen/HomeScreen';
import LoginScreen from './components/LoginScreen/LoginScreen';

const MainNavigator = createStackNavigator({
  Home: HomeScreen,
  Login: LoginScreen,
}, {
  initialRouteName: 'Login',
});

const App = createAppContainer(MainNavigator);

export default App;
