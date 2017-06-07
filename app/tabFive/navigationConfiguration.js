'use strict'
import { StackNavigator } from 'react-navigation'

// Screens
import Profile from '../components/Profile'
  

const routeConfiguration = {
  Profile: { screen: Profile },
}
// going to disable the header for now
const stackNavigatorConfiguration = {
  headerMode: 'none',
  initialRoute: 'Profile'
}

export const NavigatorTabFive = StackNavigator(routeConfiguration,stackNavigatorConfiguration)
