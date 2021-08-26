import React from 'react'
// import NotificationsScreen from '../Screens/NotificationsScreen';
// import MenuScreen from '../Screens/MenuScreen';
import Tab from '../Components/Sections/Tab';
import HomeStack from '../Navigation/HomeStack'
// import NotificationStack from '../Navigation/NotificationStack'
import MenuStack from '../Navigation/MenuStack'

import EmployeeStack from '../Navigation/EmployeeStack'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { getNavigationOptions } from './NavigationOptions';

const TabNavigator = createMaterialTopTabNavigator();
const HomeTabs = () => {
    return(
        <TabNavigator.Navigator
        tabBarOptions={{
            showLabel:false,
            showIcon: true,
        }}
    
        // screenOptions={getNavigationOptions}
        tabBarPosition='bottom'
        tabBar={props => <Tab {...props}/>}
        >
        <TabNavigator.Screen  name="HomeStack" component={HomeStack} />
        <TabNavigator.Screen name="EmployeeStack" component={EmployeeStack} />
        <TabNavigator.Screen name="MenuStack" component={MenuStack} />



      </TabNavigator.Navigator>
    )
}
export default HomeTabs