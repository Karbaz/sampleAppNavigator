'use strict'
import { StackNavigator } from 'react-navigation'

// Screens
  import TabFourScreenOne from '../components/TabFourScreenOne'
  import TabFourScreenTwo from '../components/TabFourScreenTwo'
// import TabThreeScreenThree from './views/TabThreeScreenThree'

const routeConfiguration = {
  TabFourScreenOne: { screen: TabFourScreenOne },
  TabFourScreenTwo: { screen: TabFourScreenTwo },
}
// going to disable the header for now
const stackNavigatorConfiguration = {
  headerMode: 'none',
  title: 'Home',
  initialRoute: 'TabThreeScreenOne'
}

export const NavigatorTabFour = StackNavigator(routeConfiguration,stackNavigatorConfiguration)
