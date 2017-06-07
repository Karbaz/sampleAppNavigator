'use strict'
import { StackNavigator } from 'react-navigation'

// Screens
import TabThreeScreenOne from '../components/TabThreeScreenOne'
import TabThreeScreenTwo from '../components/TabThreeScreenTwo'
import TabThreeScreenThree from '../components/TabThreeScreenThree'

const routeConfiguration = {
  TabThreeScreenOne: { screen: TabThreeScreenOne },
  TabThreeScreenTwo: { screen: TabThreeScreenTwo },
  TabThreeScreenThree: { screen: TabThreeScreenThree },

}
// going to disable the header for now
const stackNavigatorConfiguration = {
  initialRoute: 'TabThreeScreenOne',
  headerMode: 'none',
}

export const NavigatorTabThree = StackNavigator(routeConfiguration,stackNavigatorConfiguration)
