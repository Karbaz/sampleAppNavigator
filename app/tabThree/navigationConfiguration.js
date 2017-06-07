'use strict'
import { StackNavigator } from 'react-navigation'

// Screens
import Bag from '../components/Bag'

const routeConfiguration = {
  Bag: { screen: Bag }
}
// going to disable the header for now
const stackNavigatorConfiguration = {
  initialRoute: 'Bag',
  headerMode: 'none',
}

export const NavigatorTabThree = StackNavigator(routeConfiguration,stackNavigatorConfiguration)
