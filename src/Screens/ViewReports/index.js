import React from 'react';
import { FlatList, View, ActivityIndicator } from 'react-native';
import styles from './styles';
import { WebView } from 'react-native-webview';

import { connect } from 'react-redux';
import actions from '../../redux/actions/index';
import { vh, vw } from '../../Utils/Units';



class ViewReports extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      keyword: ''
    };
  }
  componentDidMount() {
    this.props.navigation.addListener('focus', this._getInspectionReport);
  }


  _getInspectionReport = () => {


    if (this?.props?.route?.params?.role == "InspectionReport") {
      // alert('InspectionReport')
      this.props.getInspectionReportView(
        this?.props?.route?.params?.id,
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

    }
    if (this?.props?.route?.params?.role == "DailyProduction") {
      // alert('DailyProduction')
      this.props.getDailyProductionReportsView(
        this?.props?.route?.params?.id,
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

    }
    if (this?.props?.route?.params?.role == "Greish") {
      alert('Greish')
      this.props.getGreishSummaryView(
        this?.props?.route?.params?.id,
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

    }
    if (this?.props?.route?.params?.role == "ProductionSummary") {
      alert('ProductionSummary')
      // alert('Greish')
      this.props.getProductionSummaryView(
        this?.props?.route?.params?.id,
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

    }




  };


  render() {
    console.log('this.props.viewReportsUrl', this.props.viewReportsUrl)
    return (<View style={{ height: 100 * vh, width: 100 * vw }}>
      <WebView

        // source={{ uri: 'https://unibro.com.pk/erpsys/ZDF_2021-11-03-05-33-51_61821f3fd9ce4.pdf' }}
        // source={{ uri: 'https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwifreLdtvvzAhVgQEEAHSDHB1sQPAgI' }}
        source={{ uri: this.props.viewReportsUrl }}
   

      />
    </View>



    );
  }
}

const mapStateToProps = (state) => {
  console.log('view reportss reducerr', state)
  return {
    activity_loading: state.GeneralReducer.activity_loading,

    viewReportsUrl: state.GeneralReducer.viewReportsUrl,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getInspectionReportView: (keyword, success, error) =>
      dispatch(actions.getInspectionReportView(keyword, success, error)),


    getDailyProductionReportsView: (keyword, success, error) =>
      dispatch(actions.getDailyProductionReportsView(keyword, success, error)),


    getProductionSummaryView: (keyword, success, error) =>
      dispatch(actions.getProductionSummaryView(keyword, success, error)),

    getGreishSummaryView: (keyword, success, error) =>
      dispatch(actions.getGreishSummaryView(keyword, success, error)),
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewReports);
