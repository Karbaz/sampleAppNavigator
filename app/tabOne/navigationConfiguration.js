'use strict'

import { StackNavigator } from 'react-navigation'

// Screens
import HomeBoxes from '../components/HomeBoxes'
import Categories from '../components/Categories'

const routeConfiguration = {
  HomeBoxes: { screen: HomeBoxes },
  Categories : { screen: Categories},
}

// going to disable the header for now
const stackNavigatorConfiguration = {
  headerMode: 'none',
  title: 'Home',
  initialRouteName: 'HomeBoxes'
}

export const NavigatorTabOne = StackNavigator(routeConfiguration,stackNavigatorConfiguration)
