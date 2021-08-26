import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
// import HomeScreen from '../Screens/HomeScreen'
import EmployeeProfile from '../Screens/EmployeeProfile'
// import WatchStreanScreen from '../Screens/WatchStreanScreen'
import { getNavigationOptions } from './NavigationOptions';
const HomeNavigator = createStackNavigator();

const EmployeeStack = () => {
    return (
        <HomeNavigator.Navigator screenOptions={getNavigationOptions}>
            <HomeNavigator.Screen component={EmployeeProfile} name='EmployeeProfile'/>
            {/* <HomeNavigator.Screen component={WatchStreanScreen} name='WatchStreanScreen'/> */}
        </HomeNavigator.Navigator>
    )
}
export default EmployeeStack
