'use strict'
import React from 'react'
import { View, Text, TouchableOpacity, Platform, Alert, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import style from '../Style'
import Header from '../components/Header'


class Bag extends React.Component {

  renderHeader=()=>{
   let search = <Text onPress={()=>{Alert.alert('new screen')}}>Search</Text>
    return (
      <View>
        <Header showBack={false} header={'Bag'} rightHeader={search} navigation={this.props.navigation}/>
       </View>
      )
  }

  render(){
    return(
     <View style={{
        flex: 1,
        flexDirection: 'column',
      }}>
      <View style={{backgroundColor: 'transparent'}}>
         {Platform.OS == 'ios' ? this.renderHeader() : null}
       </View>
        <View style={{flex:8,backgroundColor: 'white'}}>
          <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
          <Text>{ 'Bag' }</Text>
          </ScrollView>
        </View>
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
