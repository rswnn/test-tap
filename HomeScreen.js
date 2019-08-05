import React, { Component } from 'react'
import {View, Text, ViewComponent, Button } from 'react-native'

import { TextInput } from 'react-native-gesture-handler';

export class HomeScreen extends Component {

  static navigationOptions = {
    title: 'Tirta Agro Persada',
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      color: '#000',
      textAlign: 'center'
    },
  };

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
      <View style={{margin: 20,paddingTop: 50}}>
        <TextInput style={{borderWidth: 1, borderRadius: 10, borderColor: 'gray', marginBottom: 10}} placeholder="username" onChangeText={(text) => this.setState({username: text})}/>
        <TextInput style={{borderWidth: 1, borderRadius: 10, borderColor: 'gray', marginBottom: 10}} placeholder="email" onChangeText={(text) => this.setState({email: text})}/>
        <View style={{margin: 10, width: 200, alignSelf: 'center'}}>
        <Button title="Take a photo" onPress={() => this.handleCamera()}/>
        </View>
        <View style={{ width: 200, alignSelf: 'center'}}>
        <Button title="Input" onPress={() => this.handleInput()}/>
        </View>
      </View>
    )
  }
}

export default HomeScreen
