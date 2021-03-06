import React from 'react';
import {TransitionPresets} from '@react-navigation/stack';
import {StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import headerBackground from './headerBackground';
import {fonts} from '../assets/fonts';
import {vh} from '../Utils/Units';
import IconButton from '../Components/Buttons/IconButton';
import {icons} from '../assets/images';
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

  console.log('should header be shown,active route name',activeRouteName)
  setStatusBar(activeRouteName);
  switch (activeRouteName) {
    case 'Dashboard':
    case 'EmployeeProfile':
    case 'MenuScreen':
    case 'WatchStreanScreen':
    case 'StreamsScreen':
    case 'EmployeeEmails':
    case 'PaymentLogScreen':
    case 'MySubscriptionScreen':
    case 'AboutUsScreen':
    case 'ChangePasswordScreen':
    case 'PaymentDetail':
    case 'StreamDetail':
    case 'StockInHand':
      return true;

    default:
      return false;
  }
};
export const getTitle = (activeRouteName) => {

  console.log('Get titleeee',activeRouteName)
  switch (activeRouteName) {
    case 'Dashboard':
      return 'Dashboard';
    case 'ContactUsScreen':
      return 'Contact Us';
    case 'PaymentLogScreen':
      return 'Payment Logs';

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
