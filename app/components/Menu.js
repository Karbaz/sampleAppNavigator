'use strict'
import React from 'react'
import { View, Text, TouchableOpacity, Platform } from 'react-native'
import { connect } from 'react-redux'
import style from '../Style'



class Menu extends React.Component {

  renderHeader=()=>{
    return (
      <View style={[style.headerStyle]}>  
        <TouchableOpacity onPress={()=>{this.props.navigation.goBack()}}>
        <Text style={{display:'none'}}>
        {this.props.MenuTab.routes ? "Back" : null}
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
        backgroundColor:'yellow'
      }}>
        {Platform.OS === 'ios' ? this.renderHeader() : null}
        <Text>{'Menu'}</Text>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
 return {
    HomeBoxes: state.HomeBoxes,
    MenuTab:state.MenuTab    
  }
}

export default connect(mapStateToProps)(Menu)