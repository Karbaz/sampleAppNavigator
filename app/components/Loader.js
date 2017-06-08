import React,{Component} from 'react'
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet
} from 'react-native'

export default class Loader extends Component{
  render(){
    return <View style={styles.centerLoading}><ActivityIndicator style={[styles.centerLoading]} size="small" color="#51cccc"/></View>
  }
}


 const styles = StyleSheet.create({
   centerLoading: {
     alignItems: 'center',
     justifyContent: 'center',
     flex:5,
     backgroundColor:'white'
   }
 }); 