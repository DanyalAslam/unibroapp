import React from 'react';
import {View,Text} from 'react-native';
import styles from './styles';
import {connect} from 'react-redux';
import actions from './../../redux/actions/index';

// import PoppinsSemiBold from '../../Components/Text/PoppinsSemiBold';
// import PoppinsLight from '../../Components/Text/PoppinsLight';


class AboutUsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
    };
  }


  _getHomeData = () => {
    // this.setState({
    //   edit: true,
    // });
    this.props.getDahsBoardData(
      (success) => {
        if (success) {
          this.setState({
            sessions: this.props.streamData,
          });
        }
      },
      (error) => {
        showToast(error);
      },
    );
    // this._getSubscriptionData();
  };

  componentDidMount() {
    this.props.navigation.addListener('focus', this._getHomeData);
  }
  render() {
    return (
      <View style={styles.container}>
        {/* <PoppinsSemiBold style={styles.title}>Our History</PoppinsSemiBold>
        <PoppinsLight style={styles.desc}>{about}</PoppinsLight> */}

        <Text>Hello from Dahboard</Text>
      </View>
    );
  }
}
const about = 'Lorem ipsum dolor sit amet, consectetur adipis cingelit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.Lorem ipsum dolor sit amet, consectetur adipis cingelit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.';




const mapStateToProps = (state) => {
  return {
    // streamData: state.GeneralReducer.StreamData,
    // access_token: state.GeneralReducer.access_token,
    // mySubscription: state.GeneralReducer.mySubscription,
    // userInfo: state.GeneralReducer.userInfo,
    // notification_count: state.GeneralReducer.notification_counts,
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    getDahsBoardData: (success, error) =>
      dispatch(actions.getDahsBoardData(success, error)),

    // buyTicket: (Data, success, error) =>
    //   dispatch(actions.buyTicket(Data, success, error)),
    // getSubscription: (success, error) =>
    //   dispatch(actions.getSubscription(success, error)),

    // logOut: (success, error) => dispatch(actions.logOut(success, error)),
    // getNotificationsCount: (success, error) =>
    //   dispatch(actions.getNotificationsCount(success, error)),

    // getSingleStreams: (id, success, error) =>
    //   dispatch(actions.getSingleStreams(id, success, error)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AboutUsScreen);
