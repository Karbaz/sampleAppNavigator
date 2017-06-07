'use strict'
import React from 'react'
import { View, Text, TouchableOpacity, Platform } from 'react-native'
import { connect } from 'react-redux'
import style from '../Style'


class Profile extends React.Component {

  renderHeader=()=>{
    return (
      <View style={[style.headerStyle]}>  
        <TouchableOpacity onPress={()=>{this.props.navigation.goBack()}}>
        <Text style={{display:'none'}}>
        {this.props.ProfileTab.routes ? "Back" : null}
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
        backgroundColor:'maroon'
      }}>
      
      {Platform.OS === 'ios' ? this.renderHeader() : null}

      <Text>{ 'Profile' }</Text>
      </View>
    )
  }
}



const mapStateToProps = (state) => {
 return {
    HomeBoxes: state.HomeBoxes,
    ProfileTab:state.ProfileTab    
  }
}

export default connect(mapStateToProps)(Profile)