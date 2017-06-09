'use strict'
// React
import React from 'react'
// Navigation
import { addNavigationHelpers } from 'react-navigation'
import { NavigatorTabThree } from '../navigationConfiguration'
//Redux
import { connect } from 'react-redux'
// Icon
import Icon from 'react-native-vector-icons/MaterialIcons'

const mapStateToProps = (state) => {
 return {
  navigationState: state.BagTab
  }
}
class TabThreeNavigation extends React.Component {
  static navigationOptions = {
  
  }

render(){
    const { dispatch, navigationState} = this.props
return (
      <NavigatorTabThree
        navigation={addNavigationHelpers({
          dispatch: dispatch,
          state: navigationState
        })}
      />
    )
  }
}

export default connect(mapStateToProps)(TabThreeNavigation)
