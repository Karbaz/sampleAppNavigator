'use strict'
import React from 'react'
import { View, Text, TouchableOpacity,Button } from 'react-native'
export default class TabOneScreenOne extends React.Component {

   static navigationOptions = ({ navigation }) => ({
    title: 'Chat with',
    // headerRight: (
    //   <Button
    //     title={'Done'}
    //     onPress={() => {Alert.alert('df')}}
    //   />
    // )
    });


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
          <Text>{'Go to next screen this tab'}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
