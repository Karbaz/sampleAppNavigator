import React, { Component } from 'react'
import {
  View,
  Text,
  Platform,
  TouchableOpacity,
  Image
} from 'react-native'
import { connect } from 'react-redux'
import style from '../Style'


class Categories extends Component{
  
  renderHeader=()=>{
    return (
      <View style={[style.headerStyle]}>
        
        <TouchableOpacity onPress={()=>{this.props.navigation.goBack()}}>
        <Image style={{height:25,width:20}} source={require('../images/back_chevron.png')} />
        </TouchableOpacity>

        <Text>Header</Text>
        <Text>Add</Text>
      </View>
      )
  }

  render(){
    return <View style={{flex:1,backgroundColor:'red'}}>
    
    {Platform.OS === 'ios' ? this.renderHeader() : null}
    
    <Text>Cat</Text>
    <Text onPress={()=>{
      this.props.navigation.goBack() 
    }}>Back</Text>
    </View>
  }
}

const mapStateToProps = (state) => {
 return {
    HomeBoxes: state.HomeBoxes,
    HomeTab:state.HomeTab
  }
}

export default connect(mapStateToProps)(Categories)