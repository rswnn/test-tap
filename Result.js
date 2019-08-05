import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import { Thumbnail, Content, Card, CardItem, Left, Body, Container } from 'native-base';

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
            <Container>
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: this.state.pic}} />
                <Body>
                  <Text>{username}</Text>
                  <Text note>{email}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: this.state.pic}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
          </Card>
        </Content>
      </Container>
        )
    }
}

export default Result
