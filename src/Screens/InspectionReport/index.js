import React from 'react';
import { FlatList, View, ActivityIndicator } from 'react-native';
import styles from './styles';
import InspectionReportCards from '../../Components/Sections/InspectionReportCards';
import { connect } from 'react-redux';
import actions from '../../redux/actions/index';
import { vh, vw } from '../../Utils/Units';
import { WebView } from 'react-native-webview';

import MainInput from '../../Components/Input/MainInput';

class InspectionReport extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      keyword: '',
    };
  }

  componentDidMount() {
    this.props.navigation.addListener('focus', this._getInspectionReport);
  }

  componentWillUnmount() {
    this.props.navigation.removeListener('focus');
  }

  _getInspectionReport = () => {
    this.props.getInspectionReport(
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


  _renderInspectionReport = (item) => {


    return <InspectionReportCards




      onSuccess={(id) => this.props.navigation.navigate('ViewReports', { id: id, role: 'InspectionReport' })}


      stock={item}

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

      const search = await this.props.getInspectionReport(data.keyword, success => { }, error => { });
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
            placeholder=" Search Inspection Report"
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
          data={this.props.inspection_report}
          renderItem={this._renderInspectionReport}
          contentContainerStyle={{ paddingBottom: 10 * vh }}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {

  return {
    activity_loading: state.GeneralReducer.activity_loading,

    inspection_report: state.GeneralReducer.inspection_report,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getInspectionReport: (keyword, success, error) =>
      dispatch(actions.getInspectionReport(keyword, success, error)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InspectionReport);
