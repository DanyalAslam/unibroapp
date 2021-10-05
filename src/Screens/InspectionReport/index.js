import React from 'react';
import { FlatList, View, Text } from 'react-native';
import styles from './styles';
import InspectionReportCards from '../../Components/Sections/InspectionReportCards';
import { connect } from 'react-redux';
import actions from '../../redux/actions/index';
import { vh } from '../../Utils/Units';


class InspectionReport extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
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

    console.log('gettgtttttt fabricsasad',item)
    // return <InspectionReportCards



    //   // onSuccess={() =>
    //   //   this.props.navigation.navigate('WatchStreanScreen', { item })
    //   // }
    //   stock={item} 
      
    //   />;
  };
  render() {

    return (
      <View style={styles.container}>
  <FlatList 
  showsVerticalScrollIndicator={false}
  data={this.props.purchasing_orders}
  renderItem={this._renderInspectionReport}
  contentContainerStyle={{paddingBottom:10*vh}}
  />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('Purchasing orders state',state)
  return {
    purchasing_orders: state.GeneralReducer.purchasing_orders,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getInspectionReport: (success, error) =>
      dispatch(actions.getInspectionReport(success, error)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InspectionReport);
