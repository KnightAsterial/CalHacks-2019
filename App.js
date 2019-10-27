import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './components/HomeScreen/HomeScreen';
import LoginScreen from './components/LoginScreen/LoginScreen';

const MainNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: { header: null, },
    },
  Login: {
    screen: LoginScreen,
    navigationOptions: { header: null, },
    },
}, {
  initialRouteName: 'Login',
});

const AppContainer = createAppContainer(MainNavigator);


class App extends Component{
  render(){
    return (
        <AppContainer />
    );
  }
}



export default App;
