import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView, Image } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import * as Font from 'expo-font';

class QRScreen extends Component{
  constructor(props){
    super(props);
    this.state = { fontLoaded: false };
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Monserrat': require('./../../assets/fonts/Montserrat-Regular.ttf'),
      'Paytone_One': require ('./../../assets/fonts/PaytoneOne-Regular.ttf'),
    });
    this.setState( {fontLoaded: true} );
  }

  render(){
    let style_safe_area = {
      flex: 1,
      backgroundColor: this.props.color,
    }
    let style_container= {
      flex: 1,
      backgroundColor: this.props.color,
      alignItems: 'center',
      justifyContent: 'center',
    }

    return (
      <SafeAreaView style={style_safe_area}>
        <View style={style_container}>
          <Image source={{uri:"https://chart.googleapis.com/chart?cht=qr&chs=500x500&chl=x712tBJAHSGB786t21bghjAHb7p68"}} style={{width: 300, height: 300}}/>
        </View>
      </SafeAreaView>
    )
  }
}

export default QRScreen;