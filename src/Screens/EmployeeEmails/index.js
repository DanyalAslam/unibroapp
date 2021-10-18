import React from 'react';
import { FlatList, View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import EmployeeCards from '../../Components/Sections/EmployeeCards';
import { connect } from 'react-redux';
import actions from './../../redux/actions/index';
import { vh, vw } from '../../Utils/Units';
import EmployeeEmailsCards from '../../Components/Sections/EmployeeEmailsCards';
import { icons } from '../../assets/images'
import MainInput from '../../Components/Input/MainInput';
// import ThemeColors from '../../Utils/ThemeColors';
// import { vh, vw } from '../../Utils/Units';
// import reactNativeEasyPushNotifications from 'react-native-easy-push-notifications';



class EmployeeEmails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      keyword: '',
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
      this.state.keyword,
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


  onStateChange = (type, text) => {
    this.setState({
      [type]: text,
    },() =>this._search());
  };
  _search = async () => {
    try {
      let data = {
        keyword: this.state.keyword,
      };

      const search = await this.props.getEmployeeEmails(data.keyword,success =>{},error =>{});
    } catch (error) {
      showToast(error);
    }
  };
  render() {

    return (
      <View style={styles.container}>

        <View
          style={{
            height: 6 * vh,
            width: 90 * vw,
            borderRadius: 2 * vw,
            backgroundColor: '#FFFFFF',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 5 * vw,
            alignItems: 'center',
            elevation: 2 * vw,
            marginTop: 2 * vh
          }}>

          <MainInput
            placeholder=" Search Employee Emails"
            style={styles.inputField}
            onChangeText={(keyword) => this.onStateChange('keyword', keyword)}
          />

          {/* <TouchableOpacity onPress={this._search}>
            <Image
              resizeMode="contain"
              style={{ height: 5 * vh, width: 5 * vw }}
              source={icons.searchBlue}
            />
          </TouchableOpacity> */}
        </View>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={this.props.all_employees_emails}
          renderItem={this._renderEmployeeEmails}
          contentContainerStyle={{ paddingBottom: 10 * vh }}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {

  return {
    all_employees_emails: state.GeneralReducer.all_employees_emails,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getEmployeeEmails: (keyword,success,error) =>
      dispatch(actions.getEmployeeEmails(keyword,success, error)),



    ReadNotification: (success, error) =>
      dispatch(actions.ReadNotification(success, error)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EmployeeEmails);
