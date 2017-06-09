'use strict'
// React
import React from 'react'
// Navigation
import { addNavigationHelpers } from 'react-navigation'
import { NavigatorTabFive } from '../navigationConfiguration'
//Redux
import { connect } from 'react-redux'
// Icon
import Icon from 'react-native-vector-icons/MaterialIcons'

const mapStateToProps = (state) => {
 return {
  navigationState: state.ProfileTab
  }
}
class TabFiveNavigation extends React.Component {
  static navigationOptions = {
    tabBarLabel: "Books",
  }

render(){
    const { dispatch, navigationState} = this.props
return (
      <NavigatorTabFive
        navigation={addNavigationHelpers({
          dispatch: dispatch,
          state: navigationState
        })}
      />
    )
  }
}

export default connect(mapStateToProps)(TabFiveNavigation)
