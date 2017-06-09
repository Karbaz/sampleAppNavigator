'use strict'
// React
import React from 'react'
// Navigation
import { addNavigationHelpers } from 'react-navigation'
import { NavigatorTabFour } from '../navigationConfiguration'
//Redux
import { connect } from 'react-redux'
// Icon
import Icon from 'react-native-vector-icons/MaterialIcons'

const mapStateToProps = (state) => {
 return {
  navigationState: state.WishlistTab
  }
}
class TabFourNavigation extends React.Component {
  static navigationOptions = {
  
  }

render(){
    const { dispatch, navigationState} = this.props
return (
      <NavigatorTabFour
        navigation={addNavigationHelpers({
          dispatch: dispatch,
          state: navigationState
        })}
      />
    )
  }
}

export default connect(mapStateToProps)(TabFourNavigation)
