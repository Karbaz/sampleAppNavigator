'use strict'
import { StackNavigator } from 'react-navigation'

// Screens
  import TabFiveScreenOne from '../components/TabFiveScreenOne'
  import TabFiveScreenTwo from '../components/TabFiveScreenTwo'

const routeConfiguration = {
  TabFiveScreenOne: { screen: TabFiveScreenOne },
  TabFiveScreenTwo: { screen: TabFiveScreenTwo },
}
// going to disable the header for now
const stackNavigatorConfiguration = {
  headerMode: 'none',
  initialRoute: 'TabThreeScreenOne'
}

export const NavigatorTabFive = StackNavigator(routeConfiguration,stackNavigatorConfiguration)
