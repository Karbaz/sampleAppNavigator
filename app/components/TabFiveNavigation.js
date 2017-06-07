'use strict'
// React
import React from 'react'
// Navigation
import { addNavigationHelpers } from 'react-navigation'
import { NavigatorTabFive } from '../navigationConfiguration'
//Redux
import { connect } from 'react-redux'
// Icon
import Icon from 'react-native-vector-icons/FontAwesome'

const mapStateToProps = (state) => {
 return {
  navigationState: state.tabFive
  }
}
class TabFiveNavigation extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Tab five',
    tabBarIcon: ({ tintColor }) => <Icon size={ 20 } name={ 'umbrella' } color={ tintColor }/>
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
