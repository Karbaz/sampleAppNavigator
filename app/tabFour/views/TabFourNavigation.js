'use strict'
// React
import React from 'react'
// Navigation
import { addNavigationHelpers } from 'react-navigation'
import { NavigatorTabFour } from '../navigationConfiguration'
//Redux
import { connect } from 'react-redux'
// Icon
import Icon from 'react-native-vector-icons/FontAwesome'

const mapStateToProps = (state) => {
 return {
  navigationState: state.tabFour
  }
}
class TabFourNavigation extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Tab Four',
    tabBarIcon: ({ tintColor }) => <Icon size={ 20 } name={ 'umbrella' } color={ tintColor }/>
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
