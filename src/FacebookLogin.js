import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'
import {
  LoginManager,
  LoginButton,
  AccessToken,
} from 'react-native-fbsdk'

export default class FacebookLogin extends Component {
  logoutFacebook = () => {
    LoginManager.logOut()
  }

  getAuthToken = () => {
    /**
      If current user is not logged in to Facebook, the data will be null
      Else data will contain the Auth Token information
    **/
    AccessToken.getCurrentAccessToken().then((data) => {
      console.log('data==', data);
    })
  }

  loginWithFacebook = () => {
    LoginManager.logInWithReadPermissions(['public_profile']).then(
      function(result) {
        if (result.isCancelled) {
          console.log("login is cancelled.");
        } else {
          AccessToken.getCurrentAccessToken().then(
            (data) => {
              console.log(data.accessToken.toString())
            }
          )
        }
      }, function(error) {
        console.log('error=====', error.message);
      }
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome} onPress={this.loginWithFacebook}>
          Login with facebook via LoginManager
        </Text>
        <Text style={styles.welcome} onPress={this.logoutFacebook}>
          Logout facebook via LoginManager
        </Text>
        <Text style={styles.welcome} onPress={this.getAuthToken}>
          Get Auth Token
        </Text>
        <LoginButton
          publishPermissions={["publish_actions"]}
          onLoginFinished={
            (error, result) => {
              if (error) {
                console.log("login has error: " + result.error);
              } else if (result.isCancelled) {
                console.log("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    console.log(data.accessToken.toString())
                  }
                )
              }
            }
          }
          onLogoutFinished={() => console.log("Login out with Login Button.")}
        />
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
