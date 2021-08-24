import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {getNavigationOptions} from './NavigationOptions';
import LoginScreen from '../Screens/LoginScreen'



const AuthStack = createStackNavigator();

const AuthNavigator = () =>{
    return(
        <AuthStack.Navigator screenOptions={getNavigationOptions}>
                  <AuthStack.Screen component={LoginScreen} name="LoginScreen" />



        </AuthStack.Navigator>
    )

}
export default AuthNavigator;