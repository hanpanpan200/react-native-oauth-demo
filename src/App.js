import React, { Component } from 'react'
import {Scene, Router} from 'react-native-router-flux'

import Home from './Home'
import FacebookLogin from './FacebookLogin'
import TwitterLogin from './TwitterLogin'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="home" component={Home} title="Home" />
          <Scene key="facebookLogin" component={FacebookLogin} title="FacebookLogin" />
          <Scene key="twitterLogin" component={TwitterLogin} title="TwitterLogin" />
        </Scene>
      </Router>
    )
  }
}
