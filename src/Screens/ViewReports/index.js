import React from 'react';
import { FlatList, View, ActivityIndicator, Platform } from 'react-native';
import styles from './styles';
import { WebView } from 'react-native-webview';

import { connect } from 'react-redux';
import actions from '../../redux/actions/index';
import { vh, vw } from '../../Utils/Units';



class ViewReports extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLoader: false,
      keyword: ''
    };
  }
  componentDidMount() {
    this.props.navigation.addListener('focus', this._getInspectionReport);
  }


  _getInspectionReport = () => {


    if (this?.props?.route?.params?.role == "PO") {
      // alert('InspectionReport')
      this.props.getPOReports(
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
      console.log('this?.props?.route?.params?.id,', this?.props?.route?.params?.id,)

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
      // alert('Greish')
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
    if (this?.props?.route?.params?.role == "GRN") {

      // alert('Greish')
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

    if (this?.props?.route?.params?.role == "OGP") {

      // alert('Greish')
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
    if (this?.props?.route?.params?.role == "BOOKEDORDERS") {

      // alert('Greish')
      this.props.getBookedOrdersSummary(
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
    if (this?.props?.route?.params?.role == "I-RETURN") {

      // alert('Greish')
      this.props.getIReturnSummary(
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
    if (this?.props?.route?.params?.role == "IGP") {

      // alert('Greish')
      this.props.getIGPSummary(
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

      {Platform.OS === 'ios' ? <WebView

        onLoadStart={(syntheticEvent) => {
          this.setState({ showLoader: true });
        }}
        onLoadEnd={(syntheticEvent) => {
          this.setState({ showLoader: false });
        }}

        // source={{ uri: 'https://unibro.com.pk/erpsys/ZDF_2021-11-03-05-33-51_61821f3fd9ce4.pdf' }}
        // source={{ uri: 'https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwifreLdtvvzAhVgQEEAHSDHB1sQPAgI' }}
        // source={{ uri: this.props.viewReportsUrl }}
        source={{ uri: this.props.viewReportsUrl }}

      /> : <WebView

        onLoadStart={(syntheticEvent) => {
          this.setState({ showLoader: true });
        }}
        onLoadEnd={(syntheticEvent) => {
          this.setState({ showLoader: false });
        }}

        // source={{ uri: 'https://unibro.com.pk/erpsys/ZDF_2021-11-03-05-33-51_61821f3fd9ce4.pdf' }}
        // source={{ uri: 'https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwifreLdtvvzAhVgQEEAHSDHB1sQPAgI' }}
        // source={{ uri: this.props.viewReportsUrl }}
        source={{ uri: `http://docs.google.com/gview?embedded=true&url=${this.props.viewReportsUrl}` }}

      />}


      {this.state.showLoader && (
        <View style={{ flex: 10, backgroundColor: 'white' }}>
          <ActivityIndicator
            color="#012c65"
            size="large"
          //   style={{position: 'absolute', left: 200, top: 300}}
          />
        </View>
      )}
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


    getPOReports: (keyword, success, error) =>
      dispatch(actions.getPOReports(keyword, success, error)),


    getDailyProductionReportsView: (keyword, success, error) =>
      dispatch(actions.getDailyProductionReportsView(keyword, success, error)),


    getProductionSummaryView: (keyword, success, error) =>
      dispatch(actions.getProductionSummaryView(keyword, success, error)),

    getGreishSummaryView: (keyword, success, error) =>
      dispatch(actions.getGreishSummaryView(keyword, success, error)),

      getBookedOrdersSummary: (keyword, success, error) =>
      dispatch(actions.getBookedOrdersSummary(keyword, success, error)),

      getIReturnSummary: (keyword, success, error) =>
      dispatch(actions.getIReturnSummary(keyword, success, error)),

      getIGPSummary: (keyword, success, error) =>
      dispatch(actions.getIGPSummary(keyword, success, error)),


    getOgpSummaryView: (keyword, success, error) =>
      dispatch(actions.getOgpSummaryView(keyword, success, error)),
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewReports);
