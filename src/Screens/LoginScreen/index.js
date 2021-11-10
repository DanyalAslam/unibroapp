import React from 'react';
import { View, Platform } from 'react-native';
import styles from './styles';
import AuthContainer from '../../Components/Sections/AuthContainer';
import TouchableHOC from '../../Components/Buttons/TouchableHOC';
import PoppinsRegular from '../../Components/Text/PoppinsRegular';
import CircularBold from '../../Components/Text/CircularBold';
import MainInput from '../../Components/Input/MainInput';
import GradientButton from '../../Components/Buttons/GradientButton';
// import AnimatedSplash from 'react-native-animated-splash';
import { connect } from 'react-redux';
import actions from './../../redux/actions/index';
import { showToast } from './../../Utils/index';
// import ErrorPopup from '../../Components/Popups/ErrorPopup';


import { icons } from '../../assets/images';

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: '',
      user_hcode: '',


    };
  }
  //kashif
  //gmp2020
  _onLogin = () => {
    if (this.state.user_name.trim() == '') {
      return showToast('Please enter your user name');
    }
    // if (!user_nameRegex.test(this.state.user_name)) {
    //   return showToast('Please enter a valid user_name address');
    // }
    if (this.state.user_hcode.trim() == '') {
      return showToast('Please enter your password');
    }
    if (this.state.user_hcode.length < 6) {
      return showToast('user_hcode length must be at least 6 characters');
    }


    console.log('passing value', this.state);

    this.props.login(
      this.state,
      (success) => {
        showToast(success);
        this.setState({ user_name: '', user_hcode: '' });
        this.props.navigation.navigate('HomeTabs');
      },
      (error) => {
        showToast(error);
        // if (error.data) {
        //   if (error?.data?.subsciption != true) {
        //     return this.errorpopupsubscription.show(error);
        //   } else if (error == 2) {
        //     return this.errorpopupblocks.show();
        //   } else {
        //     console.log('error login :', error);
        //     return showToast(error);
        //   }
        // } else {
        //   return showToast(error);
        // }
      },
    );
  };

  componentDidMount() {
    // AnimatedSplash.hide();




  }

  renderFooter = () => {
    return (
      <TouchableHOC
        onPress={() => this.props.navigation.navigate('SignupScreen')}>
        <PoppinsRegular style={styles.footerText}>
          Don't have an account?
          <PoppinsRegular style={styles.footerTextBlue}>
            {'  '}Sign Up
          </PoppinsRegular>
        </PoppinsRegular>
      </TouchableHOC>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        {/* <ErrorPopup
          ref={(r) => (this.errorpopupsubscription = r)}
          title={'Subscription'}
          icon={icons.subscriptionCross}
          message={'Sorry! You Cant Login\nPlease subscribe the package.'}
          onHide={(data) =>
            this.props.navigation.navigate('BuySubscriptionScreen', {
              id: data?.data?.id,
            })
          }
        />

        <ErrorPopup
          ref={(r) => (this.errorpopupblocks = r)}
          title={'Block User'}
          icon={icons.BlockedUser}
          message={'Sorry! Youve Been Blocked.'}
        /> */}
        <AuthContainer title="Login" footer={this.renderFooter()}


        >
          <CircularBold style={styles.title}>
            Log in to your account
          </CircularBold>
          <MainInput
            placeholder="Enter User Name"
            style={styles.field}
            // keyboardType="user_name-address"
            value={this.state.user_name}
            onChangeText={(user_name) => this.setState({ user_name })}
          />
          <MainInput
            placeholder="Enter Password"
            style={styles.field}
            onChangeText={(t) => this.setState({ user_hcode: t })}
            value={this.state.user_hcode}
            onChangeText={(user_hcode) => this.setState({ user_hcode })}
            secureTextEntry={true}
          />
          {/* <TouchableHOC
            onPress={() =>
              this.props.navigation.navigate('user_hcodeRecoveryScreen')
            }
            style={styles.forgotButton}>
            <PoppinsRegular style={styles.forgotText}>
              Forgot user_hcode?
            </PoppinsRegular>
          </TouchableHOC> */}
          <GradientButton
            onPress={() => this._onLogin()}
            style={styles.button}
            title={'Login'}
          />
        </AuthContainer>
      </View>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    login: (credentials, success, error) =>
      dispatch(actions.login(credentials, success, error)),

  };
};

export default connect(null, mapDispatchToProps)(LoginScreen);
