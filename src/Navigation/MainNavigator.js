import React from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import {getNavigationOptions} from './NavigationOptions';
// import AuthNavigator from './AuthNavigator';
// import HomeScreen from '../Screens/HomeScreen';
// import WatchStreanScreen from '../Screens/WatchStreanScreen';
// import MenuScreen from '../Screens/MenuScreen';
// import ProfileScreen from '../Screens/ProfileScreen';
// import ChangePasswordScreen from '../Screens/ChangePasswordScreen';
// import StreamsScreen from '../Screens/StreamsScreen';
import HomeTabs from './HomeTabs';
import AuthNavigator from './AuthNavigator'
// import LinearGradient from 'react-native-linear-gradient';
// import {fonts} from '../assets/fonts';
// import PaymentDetail from '../Screens/PaymentDetail';
// import {vh} from '../Utils/Units';
const MainStack = createStackNavigator();
const MainStackNavigator = (props) => {

  console.log('MainStackNavigator propsss',props);
  return (
    <MainStack.Navigator
      // initialRouteName='HomeTabs'
      headerMode="none"
      // screenOptions={getNavigationOptions}
      // screenOptions={{
      //     headerTitleStyle:{
      //         color:'white',
      //         fontFamily:fonts.circular.bold
      //     },
      //     headerStyle:{
      //         height:10*vh
      //     }
      // }}
    >

      {props.props.GeneralReducer.access_token == null && (  <MainStack.Screen component={AuthNavigator} name="AuthNavigator" />)}
      {/* <MainStack.Screen component={PaymentDetail} name="PaymentDetail" /> */}
      {/* <MainStack.Screen component={AuthNavigator} name="AuthNavigator" /> */}
      
    {props.props.GeneralReducer.access_token && (  <MainStack.Screen component={HomeTabs} name="HomeTabs" />
    
    )
    
    
    }
    
    </MainStack.Navigator>
  );
};
class MainNavigator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderSelection = () => {
    return <MainStackNavigator   props={this.props} />;
  };
  render() {
    return <View style={{flex: 1}}>{this.renderSelection()}</View>;
  }
}
const mapState = (state) => {


  return {
    GeneralReducer: state.GeneralReducer,
  };
};
const mapProps = (dispatch) => {
  return {};
};
export default connect(mapState, mapProps)(MainNavigator);
