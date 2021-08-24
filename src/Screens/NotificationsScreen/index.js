import React from 'react';
import { FlatList, View, Text } from 'react-native';
import styles from './styles';
// import NotificationsCard from '../../Components/Sections/NotificationsCard';
import { connect } from 'react-redux';
import actions from './../../redux/actions/index';
// import PoppinsRegular from '../../Components/Text/PoppinsRegular';

// import ThemeColors from '../../Utils/ThemeColors';
// import { vh, vw } from '../../Utils/Units';
// import reactNativeEasyPushNotifications from 'react-native-easy-push-notifications';



class NotificationsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
    };
  }

  componentDidMount() {
    this.props.navigation.addListener('focus', this._getNotiData);
  }

  componentWillUnmount() {
    this.props.navigation.removeListener('focus');
  }

  _getNotiData = () => {

    this.props.ReadNotification((success) => console.log(success), (error) => console.log(error))


    this.setState({
      refreshing: true,
    });
    this.props.getNotifications(
      (success) => {
        if (success) {
          this.setState({
            refreshing: false,
          });
        }
      },
      (error) => {
        this.setState({
          refreshing: false,
        });
      },
    );
  };

  renderNotifications = (item) => {
    return <NotificationsCard

      onSuccess={() =>
        this.props.navigation.navigate('WatchStreanScreen', { item })
      }
      notification={item} />;
  };
  render() {

    return (
      <View style={styles.container}>
   <Text>Hello from Employee Screen</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userNotifications: state.GeneralReducer.userNotifications,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getNotifications: (success, error) =>
      dispatch(actions.getNotifications(success, error)),

    ReadNotification: (success, error) =>
      dispatch(actions.ReadNotification(success, error)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NotificationsScreen);
