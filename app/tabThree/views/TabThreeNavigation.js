'use strict'
// React
import React from 'react'
// Navigation
import { addNavigationHelpers } from 'react-navigation'
import { NavigatorTabThree } from '../navigationConfiguration'
//Redux
import { connect } from 'react-redux'
// Icon
import Icon from 'react-native-vector-icons/Ionicons'

const mapStateToProps = (state) => {
 return {
  navigationState: state.tabThree
  }
}
class TabThreeNavigation extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Bag',
    tabBarIcon: ({ tintColor }) => <Icon size={ 25 } name={ 'ios-cart-outline' } color={ "#51cccc" }/>
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
