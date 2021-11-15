import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
// import HomeScreen from '../Screens/HomeScreen'
import Dashboard from '../Screens/Dashboard'
import ApprovedDocuments from '../Screens/ApprovedDocuments'
// import WatchStreanScreen from '../Screens/WatchStreanScreen'
import { getNavigationOptions } from './NavigationOptions';
const HomeNavigator = createStackNavigator();
import { connect } from 'react-redux';
const HomeStack = (props) => {
    console.log('propspropspropsprops',props)
    return (
        <HomeNavigator.Navigator screenOptions={getNavigationOptions}>

            {/* {props?.apcontrol == 1 ? <HomeNavigator.Screen component={Dashboard} name='Dashboard' /> : <HomeNavigator.Screen component={ApprovedDocuments} name='ApprovedDocuments' />} */}

          <HomeNavigator.Screen component={Dashboard} name='Dashboard' /> 
         
        </HomeNavigator.Navigator>
    )
}
const mapState = (state) => {

    console.log('homestaaaak', state);
    return {
        apcontrol: state.GeneralReducer.apcontrol,
    };
};
const mapProps = (dispatch) => {
    return {};
};
export default connect(mapState, mapProps)(HomeStack);