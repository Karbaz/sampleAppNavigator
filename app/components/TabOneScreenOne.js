'use strict'
import React from 'react'
import { View, Text, TouchableOpacity,Button,Alert } from 'react-native'
import { connect } from 'react-redux'
import { getCall } from '../actions/HomeBoxesActions'
class TabOneScreenOne extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      counter:0
    }
  }

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
            this.props.navigation.navigate('TabOneScreenTwo') 
          }}>Next Page</Text>
      </View>
    )
  }
}


const mapStateToProps = (state) => {
  console.log(state,'state')
 return {
    HomeBoxes: state.HomeBoxes,    
  }
}

export default connect(mapStateToProps)(TabOneScreenOne)
