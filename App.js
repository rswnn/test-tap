import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createAppContainer } from 'react-navigation'

import Routes from './Navigation'

import HomeScreen from './HomeScreen'

export class App extends Component {
  render() {
    return (
      <View>
        <HomeScreen/>
      </View>
    )
  }
}

const Root = createAppContainer(Routes)

export default Routes
