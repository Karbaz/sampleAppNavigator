'use strict'
import React from 'react'
import { View, Text, TouchableOpacity,Button,Alert } from 'react-native'
export default class TabOneScreenOne extends React.Component {

   static navigationOptions = ({ navigation }) => ({
    title: 'Chat with',
    headerRight: (
      <Button
        title={'Done'}
        onPress={() => {Alert.alert('df')}}
      />
    ),
    // header:(<Button
    //     title={'Header'}
    //     style={{backgroundColor:'lime'}}
    //     onPress={() => {Alert.alert('df')}}
    //   />)

    headerTitle:'Titke',
    headerBackTitle:null,

    headerStyle:{
      backgroundColor:'white'
    },

    gesturesEnabled:true
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
