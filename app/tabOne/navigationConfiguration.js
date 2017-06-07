'use strict'

import { StackNavigator } from 'react-navigation'

// Screens
import TabOneScreenOne from '../components/TabOneScreenOne'
import TabOneScreenTwo from '../components/TabOneScreenTwo'

const routeConfiguration = {
  TabOneScreenOne: { screen: TabOneScreenOne },
  TabOneScreenTwo: { screen: TabOneScreenTwo },
}

// going to disable the header for now
const stackNavigatorConfiguration = {
  headerMode: 'none',
  title: 'Home',
  initialRouteName: 'TabOneScreenOne'
}

export const NavigatorTabOne = StackNavigator(routeConfiguration,stackNavigatorConfiguration)
