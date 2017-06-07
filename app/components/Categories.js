import React, { Component } from 'react'
import {
  View,
  Text
} from 'react-native'

export default class Categories extends Component{
  render(){
    return <View style={{flex:1,backgroundColor:'red',alignItems:'center',justifyContent:'center'}}>
    <Text>Cat</Text>
    <Text onPress={()=>{
      this.props.navigation.goBack() 
    }}>Back</Text>
    </View>
  }
}