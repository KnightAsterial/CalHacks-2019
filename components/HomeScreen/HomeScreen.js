import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

class HomeScreen extends Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    return (
      <View style={styles.container}>
        <Text>This is my homepage!</Text>
        <Text> Kelly sucks </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;