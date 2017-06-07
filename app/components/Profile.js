'use strict'
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
export default class Profile extends React.Component {
  render(){
    return(
      <View style={{
        flex:1,
        backgroundColor:'maroon',
        alignItems:'center',
        justifyContent:'center'
      }}>
        <Text>{ 'Profile' }</Text>
      </View>
    )
  }
}
