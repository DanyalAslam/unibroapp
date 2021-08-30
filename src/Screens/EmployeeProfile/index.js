import React from 'react';
import { FlatList, View, Text } from 'react-native';
import styles from './styles';
import EmployeeCards from '../../Components/Sections/EmployeeCards';
import { connect } from 'react-redux';
import actions from './../../redux/actions/index';
import { vh } from '../../Utils/Units';
// import PoppinsRegular from '../../Components/Text/PoppinsRegular';

// import ThemeColors from '../../Utils/ThemeColors';
// import { vh, vw } from '../../Utils/Units';
// import reactNativeEasyPushNotifications from 'react-native-easy-push-notifications';



class EmployeeProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
    };
  }

  componentDidMount() {
    this.props.navigation.addListener('focus', this._getEmployeeProfiles);
  }

  componentWillUnmount() {
    this.props.navigation.removeListener('focus');
  }

  _getEmployeeProfiles = () => {
    this.props.getEmployeeProfiles(
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

  _renderEmployeeProfile = (item) => {
    return <EmployeeCards



      // onSuccess={() =>
      //   this.props.navigation.navigate('WatchStreanScreen', { item })
      // }
      employee={item} 
      
      />;
  };
  render() {

    return (
      <View style={styles.container}>
  <FlatList 
  showsVerticalScrollIndicator={false}
  data={this.props.all_employees_profile}
  renderItem={this._renderEmployeeProfile}
  contentContainerStyle={{paddingBottom:10*vh}}
  />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('Employee state',state)
  return {
    all_employees_profile: state.GeneralReducer.all_employees_profile,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getEmployeeProfiles: (success, error) =>
      dispatch(actions.getEmployeeProfiles(success, error)),

    ReadNotification: (success, error) =>
      dispatch(actions.ReadNotification(success, error)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EmployeeProfile);
