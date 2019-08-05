import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import { Content, Card, CardItem, Left, Body } from 'native-base';

export class Result extends Component {

    state = {
        pic: null
    }

    componentDidMount() {
        this.getData()
    }

    getData = async () => {
        try {
          const value = await AsyncStorage.getItem('@pic')
          if(value !== null) {
            console.log(value)
            this.setState({
                pic: value
            })
          }
        } catch(e) {
        }
      }

    render() {
        const { navigation } = this.props
        const username = navigation.getParam('username')
        const email = navigation.getParam('email')
        return (
            <View>
                <View>
                <Image style={{width: 350, height: 500}} source={{uri: this.state.pic}}/>
                </View>
                <Text> {username} </Text>
                <Text> {email} </Text>
            </View>
        )
    }
}

export default Result
