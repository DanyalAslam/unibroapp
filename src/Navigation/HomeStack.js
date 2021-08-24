import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
// import HomeScreen from '../Screens/HomeScreen'
import Dashboard from '../Screens/Dashboard'
// import WatchStreanScreen from '../Screens/WatchStreanScreen'
import { getNavigationOptions } from './NavigationOptions';
const HomeNavigator = createStackNavigator();

const HomeStack = () => {
    return (
        <HomeNavigator.Navigator screenOptions={getNavigationOptions}>
            <HomeNavigator.Screen component={Dashboard} name='Dashboard'/>
            {/* <HomeNavigator.Screen component={WatchStreanScreen} name='WatchStreanScreen'/> */}
        </HomeNavigator.Navigator>
    )
}
export default HomeStack
