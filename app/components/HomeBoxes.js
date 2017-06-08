'use strict'
import React from 'react'
import { View, Text, TouchableOpacity,Button,Alert, Platform, FlatList, ScrollView, Image, Dimensions} from 'react-native'
import { connect } from 'react-redux'
import { commonAction, checkIfDataCacheAndMakeCall } from '../actions/HomeBoxesActions'
import style from '../Style'
import Header from '../components/Header'
import Loader from '../components/Loader'
import {deleteHomeBoxes} from '../AsyncStorage'
import ResizableImageView from './ResizableImageView'
var {height, width} = Dimensions.get('window');

class HomeBoxes extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      counter:1,
      showLoaderForTesting:0
    }
  }

  componentDidMount=()=>{
    checkIfDataCacheAndMakeCall(this.props.dispatch)
  }

  componentWillMount=()=>{
  }

 renderHeader=()=>{
    let search = <Text>Search</Text>
    return (
      <View>  
        <Header showBack={false} header={'Home'} rightHeader={search} navigation={this.props.navigation}/>
       </View>
      )
  }

  renderImagesBlocks=(item)=>{
    let {home_path} = this.props.HomeBoxes.staticData.path
    return <ResizableImageView  widthDivider={1}   imgUrl={`${home_path}${item.image}`}></ResizableImageView>
  }

  render(){
    if (this.props.HomeBoxes.showLoader) {
      return <Loader />
    }
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
          <FlatList
            data={this.props.HomeBoxes.staticData.home_boxes.list}
            keyExtractor={(item, index) => item.image}
            renderItem={({item,index}) =>this.renderImagesBlocks(item)}
          />
          <TouchableOpacity
            onPress={ () => {
              deleteHomeBoxes((error,res)=>{})
            }}
            style={{
              padding:20,
              borderRadius:20,
              backgroundColor:'yellow',
              marginTop:20
            }}>
            <Text>{`Clear cache homeboxes`}</Text>
          </TouchableOpacity>

          <Text onPress={()=>{
              this.props.navigation.navigate('Categories')
          }} style={{marginTop:100}}>Categories</Text>
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
