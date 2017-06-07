'use strict'
import { StackNavigator } from 'react-navigation'

// Screens
import Wishlist from '../components/Wishlist'

const routeConfiguration = {
  Wishlist: { screen: Wishlist }
}
// going to disable the header for now
const stackNavigatorConfiguration = {
  headerMode: 'none',
  title: 'Home',
  initialRoute: 'TabThreeScreenOne'
}

export const NavigatorTabFour = StackNavigator(routeConfiguration,stackNavigatorConfiguration)
