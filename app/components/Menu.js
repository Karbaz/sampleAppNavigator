'use strict'
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
export default class Menu extends React.Component {
  render(){
    return(
      <View style={{
        flex:1,
        backgroundColor:'yellow',
        alignItems:'center',
        justifyContent:'center'
      }}>
        <Text>{'Menu'}</Text>
      </View>
    )
  }
}
