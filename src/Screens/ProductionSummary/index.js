import React from 'react';
import { FlatList, View, Text } from 'react-native';
import styles from './styles';
import ProductionSummaryCards from '../../Components/Sections/ProductionSummaryCards';
import { connect } from 'react-redux';
import actions from '../../redux/actions/index';
import { vh } from '../../Utils/Units';


class ProductionSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
    };
  }

  componentDidMount() {
    this.props.navigation.addListener('focus', this._getProductionSummary);
  }

  componentWillUnmount() {
    this.props.navigation.removeListener('focus');
  }

  _getProductionSummary = () => {
    this.props.getProductionSummary(
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

  _renderProductionSummary = (item) => {

    console.log('gettgtttttt fabricsasad',item)
    return <ProductionSummaryCards



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
  data={this.props.production_summary}
  renderItem={this._renderProductionSummary}
  contentContainerStyle={{paddingBottom:10*vh}}
  />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('Purchasing orders state',state)
  return {
    production_summary: state.GeneralReducer.production_summary,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProductionSummary: (success, error) =>
      dispatch(actions.getProductionSummary(success, error)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductionSummary);
