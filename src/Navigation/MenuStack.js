import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import MenuScreen from '../Screens/MenuScreen';
import EmployeeEmails from '../Screens/EmployeeEmails'
import StockInHand from '../Screens/StockInHand'
import {getNavigationOptions} from './NavigationOptions';
// import MySubscriptionScreen from '../Screens/MySubscriptionScreen';
// import PaymentLogScreen from '../Screens/PaymentLogScreen';
// import ContactUsScreen from '../Screens/ContactUsScreen';
// import AboutUsScreen from '../Screens/AboutUsScreen';
// import ChangePasswordScreen from '../Screens/ChangePasswordScreen';
// import PaymentDetail from '../Screens/PaymentDetail';
// import StreamDetail from '../Screens/StreamDetail';
// import StreamDetailFilterScreen from '../Screens/StreamDetailFilterScreen';
// import SubscriptionDetail from '../Screens/SubscriptionDetail';
const MenuNavigator = createStackNavigator();
const Payment = createStackNavigator();



const MenuStack = () => {
  return (
    <MenuNavigator.Navigator screenOptions={getNavigationOptions}>
      <MenuNavigator.Screen component={MenuScreen} name="MenuScreen" />
      <MenuNavigator.Screen component={EmployeeEmails} name="EmployeeEmails" />
      <MenuNavigator.Screen component={StockInHand} name="StockInHand" />
      {/* <MenuNavigator.Screen component={StreamsScreen} name="StreamsScreen" /> */}
      {/* <MenuNavigator.Screen
        component={MySubscriptionScreen}
        name="MySubscriptionScreen"
      />

      <MenuNavigator.Screen component={PaymentDetail} name="PaymentDetail" />
      <MenuNavigator.Screen component={StreamDetail} name="StreamDetail" />
      <MenuNavigator.Screen
        component={StreamDetailFilterScreen}
        name="StreamDetailFilterScreen"
      />
      <MenuNavigator.Screen
        component={SubscriptionDetail}
        name="SubscriptionDetail"
      />

      <MenuNavigator.Screen
        component={ContactUsScreen}
        name="ContactUsScreen"
      />
      <MenuNavigator.Screen component={AboutUsScreen} name="AboutUsScreen" />
      <MenuNavigator.Screen
        component={ChangePasswordScreen}
        name="ChangePasswordScreen"
      /> */}
    </MenuNavigator.Navigator>
  );
};
export default MenuStack;
