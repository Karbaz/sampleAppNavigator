'use strict'

import { StackNavigator } from 'react-navigation'
import React, { Component } from 'react'
import {Button,Alert} from 'react-native'
// Screens
import TabTwoScreenOne from '../components/TabTwoScreenOne'
import TabTwoScreenTwo from '../components/TabTwoScreenTwo'

const routeConfiguration = {
  TabTwoScreenOne: { screen: TabTwoScreenOne },
  TabTwoScreenTwo: { screen: TabTwoScreenTwo },
}
// going to disable the header for now

const stackNavigatorConfiguration = {
  headerMode: 'none',
  initialRoute: 'TabTwoScreenOne'
}

export const NavigatorTabTwo = StackNavigator(routeConfiguration,stackNavigatorConfiguration)
