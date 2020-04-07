import React from 'react'
import SplashScreen from './src/Screens/SplashScreens'
import Home from './src/Screens/Home'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
// import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'


const StackLoading = createStackNavigator(
  {
    SplashScreen
  }
)

const HomeScreen = createStackNavigator(
  {
    Home
  },
  {
    headerMode: 'none'
  }
)

const Router = createStackNavigator(
  {
    HomeScreen
  },
  {
    // initialRouteName: 'StackLoading',
    headerMode: 'none'
  }
)

export default createAppContainer(Router)