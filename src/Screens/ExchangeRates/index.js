import React from 'react';
import { FlatList, View, Text } from 'react-native';
import styles from './styles';
import ExchangeRatesCards from '../../Components/Sections/ExchangeRatesCards';
import { connect } from 'react-redux';
import actions from '../../redux/actions/index';
import { vh } from '../../Utils/Units';


class ExchangeRates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
    };
  }

  componentDidMount() {
    this.props.navigation.addListener('focus', this._getExchangeRates);
  }

  componentWillUnmount() {
    this.props.navigation.removeListener('focus');
  }

  _getExchangeRates = () => {
    this.props.getExchangeRates(
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

  _renderExchangeRates = (item) => {

    console.log('gettgtttttt fabricsasad',item)
    return <ExchangeRatesCards



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
  data={this.props.purchasing_orders}
  renderItem={this._renderExchangeRates}
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
    getExchangeRates: (success, error) =>
      dispatch(actions.getExchangeRates(success, error)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExchangeRates);
