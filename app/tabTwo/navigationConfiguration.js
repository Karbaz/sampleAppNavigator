'use strict'

import { StackNavigator } from 'react-navigation'
import React, { Component } from 'react'
import {Button,Alert} from 'react-native'
// Screens
import TabTwoScreenOne from './views/TabTwoScreenOne'
import TabTwoScreenTwo from './views/TabTwoScreenTwo'

const routeConfiguration = {
  TabTwoScreenOne: { screen: TabTwoScreenOne },
  TabTwoScreenTwo: { screen: TabTwoScreenTwo },
}
// going to disable the header for now

const stackNavigatorConfiguration = {
  headerMode: 'float',
  title: 'Home',
  initialRoute: 'TabTwoScreenOne',
   headerRight: (
      <Button
        title={'Done'}
        onPress={() => {Alert.alert('df')}}
      />
    )
}

export const NavigatorTabTwo = StackNavigator(routeConfiguration,stackNavigatorConfiguration)
