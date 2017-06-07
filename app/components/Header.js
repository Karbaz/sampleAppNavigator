import React,{ Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native'
import style from '../Style'
export default class Header extends Component{
  render(){
    return(
        <View style={[style.headerStyle]}>  
        
        <TouchableOpacity onPress={()=>{this.props.navigation.goBack()}}>
        {
          this.props.showBack ? 
          <Image style={{height:25,width:20}} source={require('../images/back_chevron.png')} />
          : null
        }
        </TouchableOpacity>
        <Text>{this.props.header}</Text>
        <View>{this.props.rightHeader }</View>
        </View>
      )
  }
}