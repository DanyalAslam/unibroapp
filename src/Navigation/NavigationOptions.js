import React from 'react';
import { TransitionPresets } from '@react-navigation/stack';
import { StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import headerBackground from './headerBackground';

import IconButton from '../Components/Buttons/IconButton';
import { icons } from '../assets/images';
export const getNavigationOptions = (props) => {
  var activeRouteName = props.route.state
    ? props.route.state.routes[props.route.state.index].name
    : props.route.name;
  return {
    ...defaultOptions(activeRouteName, props.navigation),
    ...TransitionPresets.SlideFromRightIOS,
    headerShown: shouldHeaderBeShown(activeRouteName),
    headerTitle: getTitle(activeRouteName),
    headerBackground: headerBackground,
  };
};
export const setStatusBar = (activeRouteName, settings) => {
  StatusBar.setBackgroundColor('rgba(255,255,255,0.13)', true);
  StatusBar.setTranslucent(true);
  StatusBar.setBarStyle('light-content', true);
};
export const shouldHeaderBeShown = (activeRouteName) => {

  console.log('activeRouteName', activeRouteName)

  setStatusBar(activeRouteName);
  switch (activeRouteName) {
  case 'ApprovedDocuments':
    case 'Dashboard':
    case 'EmployeeProfile':
    case 'MenuScreen':
    case 'BookedOrders':
    case 'EmployeeEmails':
    case 'BuyersWiseExport':
    case 'ChangePasswordScreen':
    case 'CountryWiseExport':
case 'OutstandingPurchasingOrders':
    case 'StockInHand':
    case 'DailyProduction':
    case 'PurchasingOrders':
    case 'ProductionSummary':
    case 'InspectionReport':
    case 'InspectionSummary':
      return true;
    case 'Grey':
      return true;

    default:
      return false;
  }
};
export const getTitle = (activeRouteName) => {

  switch (activeRouteName) {
    case 'ApprovedDocuments':
    return  'Approved Documents';
    case 'Dashboard':
      return 'Dashboard';

    case 'BookedOrders':
      return 'Booked Orders';


case 'OutstandingPurchasingOrders':
  return 'Outstanding Purchase Order';
    case 'CountryWiseExport':
      return 'Country Wise Export';



    case 'BuyersWiseExport':
      return 'Buyer Wise Export';





    case 'DailyProduction':
      return 'Daily Production';
    case 'ProductionSummary':
      return 'Production Summary';


    case 'InspectionSummary':
      return 'Inspection Summary'


    case 'InspectionReport':
      return 'Inspection Report';
    case 'PaymentDetail':
      return 'Payment Detail';

    case 'StreamDetail':
      return 'Stream Detail';

    case 'StockInHand':
      return 'Stock In Hand';

    case 'EmployeeProfile':
      return 'Employee Profile';

    case 'EmployeeEmails':
      return 'Employee Emails';
    case 'MySubscriptionScreen':
      return 'My Subscriptions';
    case 'ChangePasswordScreen':
      return 'Change Password';
    case 'InspectionSummary':
      return 'Inspection Summary';
    case 'Grey':
      return 'Grey';
    case 'PurchasingOrders':
      return 'Purchase Orders'
    default:
      return 'Menu';
  }
};


export const showHeaderRight = (activeRouteName, navigation, onBackPress) => {
  switch (activeRouteName) {
    case 'HomeScreen': {
      return null;
    }
  }
};

const renderBackButton = (activeRouteName, navigation) => {
  return (
    <IconButton
      style={{}}
      icon={icons.backWhite}
      onPress={() => navigation.pop()}
    />
  );
};
const renderMenuButton = (activeRouteName, navigation) => {
  return null;
};
export const showHeaderLeft = (activeRouteName, navigation, onBackPress) => {
  // return renderBackButton(activeRouteName, navigation);

  switch (activeRouteName) {
    case 'WatchStreanScreen':
    case 'MySubscriptionScreen':
    case 'StreamsScreen':
    case 'PaymentLogScreen':
    case 'AboutUsScreen':
    case 'ContactUsScreen':
    case 'ChangePasswordScreen':
    case 'PaymentDetail':
    case 'StreamDetail':
    case 'SubscriptionDetail':
      return renderBackButton(activeRouteName, navigation);
    default:
      return null;
  }

  return null;
};
export const defaultOptions = (activeRouteName, navigation) => {
  return {


    ...TransitionPresets.SlideFromRightIOS,
    headerRight: () => showHeaderRight(activeRouteName, navigation),
    headerLeft: () => showHeaderLeft(activeRouteName, navigation),
    headerTitleAlign: 'center',
    headerTitleStyle: styles.defaultHeaderTitleStyle,
    headerTitleContainerStyle: styles.defaultHeaderTitleContainerStyle,
    headerRightContainerStyle: styles.defaultHeaderRightContainerStyle,
    headerLeftContainerStyle: styles.defaultHeaderLeftContainerStyle,
    headerStyle: styles.deafultHeaderStyle,

  };
};
