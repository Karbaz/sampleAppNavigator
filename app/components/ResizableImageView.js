import React, { Component } from 'react';
import {
  Image,
  Dimensions,
  View
} from 'react-native';
var imgUrl;
var screenWidth = Dimensions.get('window'), height, width;
var setImagesSize = {
                      '1479991823-whats_new_bar.jpg':40,
                      '1479992232-collections.jpg':40,
                      '1479992524-bewakoof-delights.jpg': 80
                    }
export default class ResizableImageView extends Component{
constructor(props) {

  super(props);
  width = screenWidth.width/this.props.widthDivider;
  let imgName = this.props.imgUrl.split('/').pop()


  if(setImagesSize[imgName] != undefined){
    height = setImagesSize[imgName]
  }
  else if(this.props.inverse) {
    height = width*(4/5)
  }
  else if (!this.props.inverse){
    height = width*1.25; 
  }
}

render(){
  return <View style={{flex:1,flexDirection:'row'}}>
    <View style={{flex:1,alignItems:'center',position:'relative',height:height,width:width}}>
      <Image resizeMode={setImagesSize[this.props.smallImageType] ? "contain" : "cover" } style={{top:0,bottom:0,position:'absolute',right:0,left:0}} source={{uri:`${this.props.imgUrl}`}} />
    </View>
    </View>
}

componentDidMount(){
}

shouldComponentUpdate(nextProps, nextState){
  // if(this.state.width==nextState.width && this.state.height==nextState.height){
  //  return false;
  // }
  return false; // by default it's true, for good performance compare current props and next props and return boolean accordingly.
}

}