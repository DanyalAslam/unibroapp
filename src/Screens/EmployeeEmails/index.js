import React from 'react';
import { FlatList, View, Text, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import styles from './styles';
import EmployeeCards from '../../Components/Sections/EmployeeCards';
import { connect } from 'react-redux';
import actions from './../../redux/actions/index';
import { vh, vw } from '../../Utils/Units';
import EmployeeEmailsCards from '../../Components/Sections/EmployeeEmailsCards';
import { icons } from '../../assets/images'
import MainInput from '../../Components/Input/MainInput';


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
    }, () => this._search());
  };
  _search = async () => {
    try {
      let data = {
        keyword: this.state.keyword,
      };

      const search = await this.props.getEmployeeEmails(data.keyword, success => { }, error => { });
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
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: 0.34,
            shadowRadius: 6.27,
            
            elevation: 10,
            marginTop: 2 * vh
          }}>

          <MainInput
            placeholder=" Search Employee Emails"
            style={styles.inputField}
            onChangeText={(keyword) => this.onStateChange('keyword', keyword)}
          />


        </View>
        {this.props.activity_loading ? <ActivityIndicator size="small" color="#012c65"
          style={{ paddingVertical: 3 * vh }}
        /> : null

        }
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

  console.log('checllclcllcllc', state)

  return {
    activity_loading: state.GeneralReducer.activity_loading,
    all_employees_emails: state.GeneralReducer.all_employees_emails,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getEmployeeEmails: (keyword, success, error) =>
      dispatch(actions.getEmployeeEmails(keyword, success, error)),



    ReadNotification: (success, error) =>
      dispatch(actions.ReadNotification(success, error)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EmployeeEmails);
