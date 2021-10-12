import React from 'react';
import { FlatList, View, Text } from 'react-native';
import styles from './styles';
import InspectionSummaryCards from '../../Components/Sections/InspectionSummaryCards';
import { connect } from 'react-redux';
import actions from '../../redux/actions/index';
import { vh } from '../../Utils/Units';


class InspectionSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
    };
  }

  componentDidMount() {
    this.props.navigation.addListener('focus', this._getInspectionSummary);
  }

  componentWillUnmount() {
    this.props.navigation.removeListener('focus');
  }

  _getInspectionSummary = () => {
    this.props.getInspectionSummary(
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

  _renderInspectionSummary = (item) => {

    console.log('gettgtttttt fabricsasad',item)
    return <InspectionSummaryCards



      // onSuccess={() =>
      //   this.props.navigation.navigate('WatchStreanScreen', { item })
      // }
      stock={item} 
      
      />;
  };
  render() {

    return (
      <View style={styles.container}>
  <FlatList 
  showsVerticalScrollIndicator={false}
  data={this.props.inspection_summary}
  renderItem={this._renderInspectionSummary}
  contentContainerStyle={{paddingBottom:10*vh}}
  />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('Purchasing orders state',state)
  return {
    inspection_summary: state.GeneralReducer.inspection_summary,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getInspectionSummary: (success, error) =>
      dispatch(actions.getInspectionSummary(success, error)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InspectionSummary);
