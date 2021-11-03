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






  render() {

    return (<View style={{ height: 100 * vh, width: 100 * vw }}>
      <WebView

        source={{ uri:'https://unibro.com.pk/erpsys/ZDF_2021-11-03-05-33-51_61821f3fd9ce4.pdf' }}
        // source={{ uri: 'https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwifreLdtvvzAhVgQEEAHSDHB1sQPAgI' }}



      />
    </View>



    );
  }
}

const mapStateToProps = (state) => {

  return {
    activity_loading: state.GeneralReducer.activity_loading,

    booked_order: state.GeneralReducer.booked_order,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getViewReports: (keyword, success, error) =>
      dispatch(actions.getViewReports(keyword, success, error)),
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewReports);
