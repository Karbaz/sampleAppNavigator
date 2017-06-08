'use strict'
import React from 'react'
import { View, Text, TouchableOpacity,Button,Alert, Platform, FlatList, ScrollView, Image, Dimensions, PanResponder} from 'react-native'
import { connect } from 'react-redux'
import { commonAction, checkIfDataCacheAndMakeCall } from '../actions/HomeBoxesActions'
import style from '../Style'
import Header from '../components/Header'
import Loader from '../components/Loader'
import {deleteHomeBoxes} from '../AsyncStorage'
import ResizableImageView from './ResizableImageView'
import Swiper from 'react-native-swiper'
var {height, width} = Dimensions.get('window');
var currentActiveBanner = ''
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

class HomeBoxes extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      counter:1,
      showLoaderForTesting:0,
      active:''
    }
  }

  componentDidMount=()=>{
    checkIfDataCacheAndMakeCall(this.props.dispatch)
  }

  componentWillMount=()=>{
      this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) => {
        if (!(gestureState.dx || gestureState.dy)) {
          console.log(this.props.HomeBoxes.staticData.mobile_slider[currentActiveBanner])
        }
      }
      });
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
    return <TouchableOpacity style={{marginTop:1}}><ResizableImageView  widthDivider={1}   imgUrl={`${home_path}${item.image}`}></ResizableImageView></TouchableOpacity>
  }

  renderImageSlider=(data)=>{
    let {home_bannerpath} = this.props.HomeBoxes.staticData.path
    return (<View style={styles.slide} {...this._panResponder.panHandlers}>
            <ResizableImageView imgUrl={`${home_bannerpath}${data.image}`} widthDivider={1} />
            </View>)
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
        <View style={{flex:0.9,backgroundColor: 'white'}}>
          {Platform.OS === 'ios' ? this.renderHeader() : null}
        </View>
        <View style={{flex:8,backgroundColor: 'white'}}>
          <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
          
          <Swiper style={styles.wrapper} autoplayTimeout={3}  height={width*1.25} loop={true} autoplay={true} autoplayDirection={true} renderPagination={(activeBanner,previousBanner)=>{
            currentActiveBanner=activeBanner
            return <View style={{backgroundColor:'transparent',position:'absolute',left:0,top:(width*1.25)-50,right:0}}>
            <View style={{backgroundColor:'transparent',flexDirection:'row',justifyContent:'center'}}>
            {this.props.HomeBoxes.staticData.mobile_slider.map((value,index)=>{
              return <MaterialIcons key={index} style={{padding:3}} name="lens" color={ index == activeBanner ? '#51cccc' : 'white'} size={10} />
            })}
            </View></View>
          }}>
          
          {
            this.props.HomeBoxes.staticData.mobile_slider.map((value,index)=>{
              return <View key={index}>{this.renderImageSlider(value)}</View>
            })
          }

          </Swiper>

          <FlatList
            data={this.props.HomeBoxes.staticData.home_boxes.list}
            keyExtractor={(item, index) => item.image}
            renderItem={({item,index}) =>this.renderImagesBlocks(item)}
          />

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

const styles = {
  wrapper: {
  },

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },

  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },

  image: {
    width,
    flex: 1
  }
}


export default connect(mapStateToProps)(HomeBoxes)
