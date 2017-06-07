import React,{ Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native'
import style from '../Style'
var {height, width} = Dimensions.get('window');
export default class Header extends Component{
  render(){
    return(
        <View style={[style.headerStyle]}>  
        
        <View style={{justifyContent:'center'}}>
        <TouchableOpacity style={{width:width/11}} onPress={()=>{this.props.navigation.goBack()}}>
        {
          this.props.showBack ? 
          <Image style={{height:20,width:20}} source={require('../images/back_chevron.png')} />
          : null
        }
        </TouchableOpacity>
        </View>
        <View style={{width:width/1.5}}>
        <Text style={{textAlign:'center',width:width/1.5}} numberOfLines={1}>{this.props.header}</Text>
        </View>
        <View style={{width:width/8}}>{this.props.rightHeader }</View>
        </View>
      )
  }
}