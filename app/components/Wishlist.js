'use strict'
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
export default class Wishlist extends React.Component {
  render(){
    return(
      <View style={{
        flex:1,
        backgroundColor:'green',
        alignItems:'center',
        justifyContent:'center'
      }}>
        <Text>{ 'Wishlist' }</Text>
      </View>
    )
  }
}
