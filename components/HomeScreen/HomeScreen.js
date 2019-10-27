import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import EventTab from './EventTab'
import * as Font from 'expo-font';
import {getUser} from './../../services/Network';

class HomeScreen extends Component{
  constructor(props){
    super(props);
    this.state = { fontLoaded: false, user: ""};
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Monserrat': require('./../../assets/fonts/Montserrat-Regular.ttf'),
      'Paytone_One': require ('./../../assets/fonts/PaytoneOne-Regular.ttf'),
    });
    this.setState( {fontLoaded: true} );

    getUser(this.props.userID).then( value => {
      this.setState( {user: value});
    });
  }

  render(){
    let hasActives = false;
    let hasInactives = false;
    let activeDOMElements = [];
    let bidDOMElements = [];
    let event_box_style= {
      width: "100%",
      height: 74,
      backgroundColor: "#519D86",
      borderRadius: 3,
      marginBottom: 15,
      fill: 1,
      flexDirection: "row",
      justifyContent: "center",
    }

    if (this.state.user){
      for (let i = 0; i < this.state.user.events.length; i++){
        let event = this.state.user.events[i];
        if (event.status == "active"){
          hasActives = true;
          activeDOMElements.push(<EventTab key={i} 
                                        onPress={ () => {this.props.navigation.navigate('QR',{userID: this.state.user.name, color: event.color})} }
                                        name={event.name} numBids={event.numBids}
                                        color={event.color} />);
        }
        if (event.status == "inactive"){
          hasInactives = true;
          bidDOMElements.push(<EventTab key={i} name={event.name} numBids={event.numBids} color={event.color} />);
        }
      }
    }

    
    
    return (
      <SafeAreaView style={styles.safe_area}>
        <View style={styles.container}>

          {(this.state.fontLoaded && this.state.user) ? (<Text style={styles.heading}>  {this.state.user.name}  </Text>) : null}
          { hasActives ? (<Text style={styles.secondary_text}>  actives  </Text>): null}
          {activeDOMElements}

          { hasActives ? (<Text style={styles.secondary_text}>  your bids  </Text>): null}
          {bidDOMElements}

          { (!hasActives && !hasInactives) ? <Text style={styles.secondary_text}>no bids yet, but that's ok!</Text> : null}

        </View>
      </SafeAreaView>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2A2B42',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  safe_area: {
    flex: 1,
    backgroundColor: '#2A2B42',
  },
  heading: {
    fontFamily: 'Paytone_One',
    marginBottom: 30,
    marginLeft: "8%",
    marginTop: 30,
    color: "#ffffff",
    fontSize: 48, 
  },
  secondary_text: {
    fontFamily: 'Monserrat',
    fontSize: 24,
    color: '#ffffff',
    marginBottom: 5,
    marginLeft: "8%",
  },
});

export default HomeScreen;