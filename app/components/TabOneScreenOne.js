'use strict'
import React from 'react'
import { View, Text, TouchableOpacity,Button,Alert } from 'react-native'
export default class TabOneScreenOne extends React.Component {

  render(){
    return(
      <View style={{
        flex:1,
        backgroundColor:'red',
        alignItems:'center',
        justifyContent:'center'
      }}>
        <Text>{ 'Tab One Screen One' }</Text>
        <TouchableOpacity
          onPress={ () => this.props.navigation.navigate('TabOneScreenTwo') }
          style={{
            padding:20,
            borderRadius:20,
            backgroundColor:'yellow',
            marginTop:20
          }}>
          <Text>{'from containers'}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
