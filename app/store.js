'use strict'

// Redux
import { applyMiddleware, combineReducers, createStore } from 'redux'
import logger from 'redux-logger'

// Navigation
import { NavigatorTabOne } from './tabOne/navigationConfiguration'
import { NavigatorTabTwo } from './tabTwo/navigationConfiguration'
import { NavigatorTabThree } from './tabThree/navigationConfiguration'
import { NavigatorTabFour } from './tabFour/navigationConfiguration'
import { NavigatorTabFive } from './tabFive/navigationConfiguration'
import { TabBar, tabBarReducer } from './tabBar/navigationConfiguration'
import {HomeBoxesReducer} from './reducers/HomeBoxes';


// Middleware
const middleware = () => {
  return applyMiddleware(logger())
}

export default createStore(
  combineReducers({
    tabBar: tabBarReducer,

    tabOne: (state,action) => NavigatorTabOne.router.getStateForAction(action,state),

    tabTwo: (state,action) => NavigatorTabTwo.router.getStateForAction(action,state),

    tabThree: (state,action) => NavigatorTabThree.router.getStateForAction(action,state),

    tabFour: (state,action) => NavigatorTabFour.router.getStateForAction(action,state),

    tabFive: (state,action) => NavigatorTabFive.router.getStateForAction(action,state),

    HomeBoxes:HomeBoxesReducer

  }),
  middleware(),
)
