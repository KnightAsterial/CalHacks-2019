import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView, TouchableWithoutFeedback } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import * as Font from 'expo-font';

class EventTab extends Component{
  constructor(props){
    super(props);
    this.state = { fontLoaded: false};
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Monserrat': require('./../../assets/fonts/Montserrat-Regular.ttf'),
      'Paytone_One': require ('./../../assets/fonts/PaytoneOne-Regular.ttf'),
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
        <View style={{width: 54, alignItems: "center", justifyContent:"center"}}>
        {this.state.fontLoaded ? <Text style={{fontFamily: 'Paytone_One', fontSize: 36, color: '#ffffff'}}> {this.props.numBids} </Text> : null}
        </View>
        <View style={{width: "85%", flexDirection: "row", alignItems: "center", justifyContent:"flex-start"}}>
        {this.state.fontLoaded ? <Text numberOfLines={1} style={{fontFamily: 'Monserrat', fontSize: 36, color: "#ffffff"}}> {this.props.name} </Text> : null}
        </View>
      </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  secondary_text: {
    fontFamily: 'Monserrat',
    fontSize: 24,
    color: '#ffffff',
  },
});

export default EventTab;