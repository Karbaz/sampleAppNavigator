'use strict'
import React from 'react'
import { View, Text, TouchableOpacity,Platform } from 'react-native'
import { connect } from 'react-redux'
import style from '../Style'


class Wishlist extends React.Component {

  renderHeader=()=>{
    return (
      <View style={[style.headerStyle]}>  
        <TouchableOpacity onPress={()=>{this.props.navigation.goBack()}}>
        <Text style={{display:'none'}}>
        {this.props.WishlistTab.routes ? "Back" : null}
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
        backgroundColor:'green'}}>

      {Platform.OS === 'ios' ? this.renderHeader() : null}


        <Text>{ 'Wishlist' }</Text>
      </View>
    )
  }
}




const mapStateToProps = (state) => {
 return {
    HomeBoxes: state.HomeBoxes,
    WishlistTab:state.WishlistTab    
  }
}

export default connect(mapStateToProps)(Wishlist)