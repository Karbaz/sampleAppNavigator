'use strict'

// React
import React from 'react'

// Navigation
import { addNavigationHelpers } from 'react-navigation'
import { NavigatorTabOne } from '../navigationConfiguration'

// Redux
import { connect } from 'react-redux'

// Icon
import Icon from 'react-native-vector-icons/Ionicons'


const mapStateToProps = (state) => {
 return {
  navigationState: state.HomeTab
  }
}

class TabOneNavigation extends React.Component {
  static navigationOptions = ({navigation})=>({
    tabBarLabel: 'Home',
    tabBarIcon: ({ tintColor }) => <Icon size={ 25 } name={ 'ios-home-outline' } color={ "#51cccc" }/>
  })

  render(){
    const { navigationState, dispatch } = this.props
    return (
      <NavigatorTabOne
        navigation={
          addNavigationHelpers({
            dispatch: dispatch,
            state: navigationState
          })
        }
      />
    )
  }
}
export default connect(mapStateToProps)(TabOneNavigation)
