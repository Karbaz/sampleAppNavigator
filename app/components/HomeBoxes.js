'use strict'
import React from 'react'
import { View, Text, TouchableOpacity,Button,Alert, Platform, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { getCall } from '../actions/HomeBoxesActions'
import style from '../Style'

class HomeBoxes extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      counter:0
    }
  }


 renderHeader=()=>{
    return (
      <View style={[style.headerStyle]}>  
        <TouchableOpacity onPress={()=>{this.props.navigation.goBack()}}>
        <Text style={{display:'none'}}>
        {this.props.HomeTab.routes ? "Back" : null}
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
        backgroundColor:'#51cccc',
      }}>
      
      {Platform.OS === 'ios' ? this.renderHeader() : null}

        <Text>HomeBoxes</Text>
        <TouchableOpacity
          onPress={ () => {
            this.setState({
              counter:this.state.counter+1
            })
            this.props.dispatch(getCall(this.state.counter))
          }}
          style={{
            padding:20,
            borderRadius:20,
            backgroundColor:'yellow',
            marginTop:20
          }}>
          <Text>{`PropsValue ${this.props.HomeBoxes.HomeBoxe}`}  {`Props ${this.props.HomeBoxes.counter}`} {`State ${this.state.counter}`}</Text>
        </TouchableOpacity>

        <Text onPress={()=>{
            this.props.navigation.navigate('Categories')
          }} style={{marginTop:100}}>Cat</Text>
          
      </View>
    )
  }
}


const mapStateToProps = (state) => {
 return {
    HomeBoxes: state.HomeBoxes,
    HomeTab:state.HomeTab
  }
}

export default connect(mapStateToProps)(HomeBoxes)
