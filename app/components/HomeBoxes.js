'use strict'
import React from 'react'
import { View, Text, TouchableOpacity,Button,Alert, Platform, FlatList, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { getCall } from '../actions/HomeBoxesActions'
import style from '../Style'
import Header from '../components/Header'
class HomeBoxes extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      counter:0
    }
  }


 renderHeader=()=>{
    let search = <Text>Search</Text>
    return (
      <View>  
        <Header showBack={false} header={'Home'} rightHeader={search} navigation={this.props.navigation}/>
       </View>
      )
  }

  render(){
    return(
      <View style={{
        flex: 1,
        flexDirection: 'column',
      }}>
        <View style={{flex:0.9,backgroundColor: 'powderblue'}}>
          {Platform.OS === 'ios' ? this.renderHeader() : null}
        </View>
        <View style={{flex:8,backgroundColor: 'skyblue'}}>
          <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
            

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

          </ScrollView>
        </View>
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
