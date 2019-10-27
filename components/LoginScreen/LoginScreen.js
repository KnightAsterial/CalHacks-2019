import React, {Component} from 'react';
import { Text, View, StyleSheet, SafeAreaView, TextInput, TouchableHighlight } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import * as Font from 'expo-font';

class LoginScreen extends Component{
  constructor(props){
    super(props);
    this.state = { fontLoaded: false, username: "", password: "", failedAttempt: false };
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Monserrat': require('./../../assets/fonts/Montserrat-Regular.ttf'),
      'Paytone_One': require ('./../../assets/fonts/PaytoneOne-Regular.ttf'),
    });
    this.setState( {fontLoaded: true} );
  }

  render(){
    return (
      <SafeAreaView style={styles.safe_area}>
        <View style={styles.container}>
          {this.state.fontLoaded ? (<Text style={styles.heading}>FratPass</Text>) : null}

          <View style={styles.login_box}>
            {this.state.fontLoaded ? (<Text style={styles.secondary_text}>username:</Text>) : null}
            {this.state.fontLoaded? (<TextInput style={styles.login_input} onChangeText={(username) => {this.setState({username})}} />) : null}
            {this.state.fontLoaded ? (<Text style={styles.secondary_text}>password:</Text>) : null}
            {this.state.fontLoaded? (<TextInput secureTextEntry={true} style={styles.login_input} onChangeText={(password) => {this.setState({password})}} />) : null}
            
            {this.state.fontLoaded ? (<Text style={styles.login_button} onPress={
              () => {
                if (this.state.username == "username" && this.state.password == "password"){
                  this.setState({failedAttempt: false})
                  this.props.navigation.navigate('Home', {
                    userID: getUserID(this.state.username, this.state.password),
                  });
                }
                else {
                  this.setState({failedAttempt: true});
                }
              }
            } >{ this.state.failedAttempt ? "incorrect, try again <<" : "login <<"}</Text>) : null}
          </View>

          <TouchableHighlight style={styles.new_account_button} >
            <View>
              {this.state.fontLoaded ? (<Text style={styles.secondary_text}>create a new account</Text>) : null}
            </View>
          </TouchableHighlight>

        </View>
      </SafeAreaView>
    );
  }
  

}

function getUserID(username, password){
  return "123456";
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
    marginLeft: "8%",
    marginBottom: 30,
    marginTop: 30,
    color: "#ffffff",
    fontSize: 48, 
  },
  login_box: {
    width: "92%",
    marginLeft: "8%",
    height: 293,
    backgroundColor: "#65BFA4",
    borderRadius: 3,
    paddingLeft: "11%",
    paddingTop: 29,
    marginBottom: 40,
  },
  secondary_text: {
    fontFamily: 'Monserrat',
    fontSize: 24,
    color: '#ffffff',
  },
  login_input: {
    width: "100%",
    height: 56,
    fontSize: 36,
    backgroundColor: "#519D86",
    borderRadius: 3,
    paddingLeft: 10,
    color: "#ffffff",
    fontFamily: 'Monserrat',
    marginBottom: 15,
  },
  login_button: {
    fontFamily: 'Monserrat',
    fontSize: 24,
    color: '#ffffff',
    textAlign: "right",
    marginTop: 9,
    marginRight: 40
  },
  new_account_button: {
    width: "100%",
    height: 60,
    borderRadius: 3,
    backgroundColor: "#D1ADFF",
    marginLeft: "8%",
    paddingLeft: "11%",
    justifyContent: "center",
  },
});

export default LoginScreen;