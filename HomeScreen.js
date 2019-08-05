import React, { Component } from 'react'
import {View, Text, ViewComponent, Button } from 'react-native'

import { TextInput } from 'react-native-gesture-handler';

export class HomeScreen extends Component {

  state ={
    username: '',
    email: '',
    pic: ''
  }

  handleCamera() {
    this.props.navigation.navigate('Camera')
  }

  handleInput() {
    this.props.navigation.navigate('Result', {
      username: this.state.username,
      email: this.state.email
    })
  }

  render() {
    return (
      <View>
        <Button title="Take a photo" onPress={() => this.handleCamera()}/>
        <TextInput placeholder="username" onChangeText={(text) => this.setState({username: text})}/>
        <TextInput placeholder="email" onChangeText={(text) => this.setState({email: text})}/>
        <Button title="Input" onPress={() => this.handleInput()}/>
      </View>
    )
  }
}

export default HomeScreen
