'use strict'
import React from 'react'
import { View, Text, TouchableOpacity, Platform, Alert } from 'react-native'
import { connect } from 'react-redux'
import style from '../Style'

class Bag extends React.Component {

  renderHeader=()=>{
    
    return (
      <View style={[style.headerStyle]}>  
        <TouchableOpacity onPress={()=>{this.props.navigation.goBack()}}>
        <Text style={{display:'none'}}>
        {this.props.BagTab.routes ? "Back" : null}
        </Text>
        </TouchableOpacity>

        <Text>Header Here</Text>
        <Text>Search</Text>
      </View>
      )
  }

  render(){
    return(
      <View style={{
        flex:1,
        backgroundColor:'aqua',
      }}>
        
        {Platform.OS === 'ios' ? this.renderHeader() : null}
        
        <Text>{ 'Bag' }</Text>
      </View>
    )
  }
}
const mapStateToProps = (state) => {
 return {
    HomeBoxes: state.HomeBoxes,
    BagTab:state.BagTab    
  }
}

export default connect(mapStateToProps)(Bag)
