'use strict'
import { TabNavigator } from 'react-navigation'
// Tab-Navigators
import TabOneNavigation from '../tabOne/views/TabOneNavigation'
import TabTwoNavigation from '../tabTwo/views/TabTwoNavigation'
import TabThreeNavigation from '../tabThree/views/TabThreeNavigation'
import TabFourNavigation from '../tabFour/views/TabFourNavigation'
import TabFiveNavigation from '../tabFive/views/TabFiveNavigation'
const routeConfiguration = {
  TabOneNavigation: { screen: TabOneNavigation },
  TabTwoNavigation: { screen: TabTwoNavigation },
  TabThreeNavigation: { screen: TabThreeNavigation },
  TabFourNavigation : {screen: TabFourNavigation },
  TabFiveNavigation : { screen : TabFiveNavigation},
}

const tabBarConfiguration = {
  //...other configs
tabBarOptions:{
    // tint color is passed to text and icons (if enabled) on the tab bar
    activeTintColor: '#51cccc',
    inactiveTintColor: '#51cccc',
// background color is for the tab component
    activeBackgroundColor: '#ffffff',
    inactiveBackgroundColor: '#f2f2f2',
    tabBarPosition:'bottom'
  }
}

export const TabBar = TabNavigator(routeConfiguration,tabBarConfiguration)

export const tabBarReducer = (state,action) => {
  if (action.type === 'JUMP_TO_TAB') {
    return { ...state, index:0 }
  } else {
    return TabBar.router.getStateForAction(action,state)
  }
}
