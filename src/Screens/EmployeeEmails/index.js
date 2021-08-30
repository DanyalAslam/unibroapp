import React from 'react';
import { FlatList, View, Text } from 'react-native';
import styles from './styles';
import EmployeeCards from '../../Components/Sections/EmployeeCards';
import { connect } from 'react-redux';
import actions from './../../redux/actions/index';
import { vh } from '../../Utils/Units';
import EmployeeEmailsCards from '../../Components/Sections/EmployeeEmailsCards';
// import PoppinsRegular from '../../Components/Text/PoppinsRegular';

// import ThemeColors from '../../Utils/ThemeColors';
// import { vh, vw } from '../../Utils/Units';
// import reactNativeEasyPushNotifications from 'react-native-easy-push-notifications';



class EmployeeEmails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
    };
  }

  componentDidMount() {
    this.props.navigation.addListener('focus', this._getEmployeeEmails);
  }

  componentWillUnmount() {
    this.props.navigation.removeListener('focus');
  }

  _getEmployeeEmails = () => {
    this.props.getEmployeeEmails(
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

  _renderEmployeeEmails = (item) => {
    return <EmployeeEmailsCards



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
  data={this.props.all_employees_emails}
  renderItem={this._renderEmployeeEmails}
  contentContainerStyle={{paddingBottom:10*vh}}
  />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('Employeeemailssss state',state)
  return {
    all_employees_emails: state.GeneralReducer.all_employees_emails,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getEmployeeEmails: (success, error) =>
      dispatch(actions.getEmployeeEmails(success, error)),

    ReadNotification: (success, error) =>
      dispatch(actions.ReadNotification(success, error)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EmployeeEmails);
