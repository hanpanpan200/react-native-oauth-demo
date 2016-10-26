/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { LoginManager } from 'react-native-fbsdk'

export default class App extends Component {
  loginWithFacebook = () => {
    LoginManager.logInWithReadPermissions(['public_profile']).then(
      function(result) {
        console.log('result=====', result);
      }, function(error) {
        console.log('error=====', error.message);
      }
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome} onPress={this.loginWithFacebook}>
          Welcome to React Native!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
