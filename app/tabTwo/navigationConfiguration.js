'use strict'

import { StackNavigator } from 'react-navigation'
import React, { Component } from 'react'
import {Button,Alert} from 'react-native'
// Screens
import Menu from '../components/Menu'

const routeConfiguration = {
  Menu: { screen: Menu }
}
// going to disable the header for now

const stackNavigatorConfiguration = {
  headerMode: 'none',
  initialRoute: 'Menu'
}

export const NavigatorTabTwo = StackNavigator(routeConfiguration,stackNavigatorConfiguration)
