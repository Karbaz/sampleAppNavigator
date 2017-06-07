import React, { Component } from 'react'
import {
  View,
  Text,
  Platform,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView
} from 'react-native'
import { connect } from 'react-redux'
import style from '../Style'
import Header from '../components/Header'



class Categories extends Component{
  
  renderHeader=()=>{
    let search = <Text onPress={()=>{Alert.alert('new screen')}}>Search</Text>
    return (
      <View>  
        <Header showBack={true} header={'Sample Header'} rightHeader={search} navigation={this.props.navigation}/>
       </View>
      )
  }

  render(){
    return(
      <View style={{flex: 1,flexDirection: 'column'}}>
       <View style={{flex:0.9,backgroundColor: 'powderblue'}}>
          {Platform.OS === 'ios' ? this.renderHeader() : null}
        </View>

        <View style={{flex:8,backgroundColor: 'skyblue'}}>
          <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
          <Text>Cat</Text>
            <Text onPress={()=>{
              this.props.navigation.goBack() 
            }}>Back</Text>
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

export default connect(mapStateToProps)(Categories)