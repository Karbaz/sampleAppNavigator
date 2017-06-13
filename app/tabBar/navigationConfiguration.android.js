// React
import React from 'react'
import { TabNavigator } from 'react-navigation'
// Tab-Navigators
import TabOneNavigation from '../tabOne/views/TabOneNavigation'
import TabTwoNavigation from '../tabTwo/views/TabTwoNavigation'
import TabThreeNavigation from '../tabThree/views/TabThreeNavigation'
import TabFourNavigation from '../tabFour/views/TabFourNavigation'
import TabFiveNavigation from '../tabFive/views/TabFiveNavigation'
import { NavigationComponent } from 'react-native-material-bottom-navigation'
// Icon
import Icon from 'react-native-vector-icons/MaterialIcons'
import FIcon from 'react-native-vector-icons/FontAwesome'
const routeConfiguration = {
  TabOneNavigation: { screen: TabOneNavigation },
  TabTwoNavigation: { screen: TabTwoNavigation },
  TabThreeNavigation: { screen: TabThreeNavigation },
  TabFourNavigation : {screen: TabFourNavigation },
  TabFiveNavigation : { screen : TabFiveNavigation},
}


var tabToReload = {
  TabTwoNavigation:'TabTwoNavigation',
  TabFiveNavigation:'TabFiveNavigation'
}

const reloadTab=(state,action, tabName)=>{
  console.log('reload tabs',tabName)
}


const tabBarConfiguration = {
  //...other configs
  tabBarComponent: NavigationComponent,
  tabBarOptions:{
    // tint color is passed to text and icons (if enabled) on the tab bar
    activeTintColor: '#51cccc',
    inactiveTintColor: '#51cccc',
// background color is for the tab component
    activeBackgroundColor: '#ffffff',
    inactiveBackgroundColor: '#f2f2f2',
    showIcon: true,
    tabStyle:{padding:0},
    labelStyle: {fontSize:10},
    style: {backgroundColor:'blue'},
    bottomNavigationOptions: {
      labelColor: 'white',
      rippleColor: 'white',
      tabs: {
        TabOneNavigation: {
          barBackgroundColor: '#37474F',
          label: 'Home',
          icon: <Icon size={15} color="white" name="home" />
        },
        TabTwoNavigation: {
          barBackgroundColor: '#37474F',
          label: 'Menus',
          icon: <Icon size={15} color="white" name="menu" />
        },
        TabThreeNavigation: {
          barBackgroundColor: '#37474F',
          label: 'Bag',
          icon: <Icon size={15} color="white" name="shopping-cart" />
        },
        TabFourNavigation: {
          barBackgroundColor: '#37474F',
          label: 'Wishlist',
          icon: <FIcon size={15} color="white" name="heart" />
        },
        TabFiveNavigation: {
          barBackgroundColor: '#37474F',
          label: 'Profile',
          icon: <Icon size={15} color="white" name="person" />
        }
      }
    }
  }
}

export const TabBar = TabNavigator(routeConfiguration,tabBarConfiguration)

export const tabBarReducer = (state,action) => {

  try{
    if (action.routeName) {
      if (action.routeName == tabToReload[action.routeName]) {
        reloadTab(state,action,tabToReload[action.routeName]);
      }
    }
  }catch(e){}

  
  if (action.type === 'JUMP_TO_TAB') {
    return { ...state, index:0 }
  } else {
    return TabBar.router.getStateForAction(action,state)
  }
}
