import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView, TouchableWithoutFeedback } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import * as Font from 'expo-font';

class QRScannerButton extends Component{
  constructor(props){
    super(props);
    this.state = { fontLoaded: false };
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Monserrat': require('./../../assets/fonts/Montserrat-Regular.ttf'),
    });
    this.setState( {fontLoaded: true} );
  }

  render(){
    let event_box_style= {
      width: "92%",
      marginLeft: "8%",
      height: 74,
      backgroundColor: this.props.color,
      borderRadius: 3,
      marginBottom: 15,
      fill: 1,
      flexDirection: "row",
      alignItems: 'center',
      justifyContent: "flex-start",
    }

    return (
      <TouchableWithoutFeedback onPress={this.props.onPress}>
      <View style={event_box_style}>
        <View style={{width: "85%", flexDirection: "row", alignItems: "center", justifyContent:"flex-start"}}>
        {this.state.fontLoaded ? <Text numberOfLines={1} style={{fontFamily: 'Monserrat', fontSize: 36, color: "#ffffff"}}> scan here </Text> : null}
        </View>
      </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default QRScannerButton;