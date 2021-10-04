import React from 'react';
import { FlatList, View, Text } from 'react-native';
import styles from './styles';
import OutstandingPurchasingOrdersCards from '../../Components/Sections/OutstandingPurchasingOrdersCards';
import { connect } from 'react-redux';
import actions from '../../redux/actions/index';
import { vh } from '../../Utils/Units';


class OutstandingPurchasingOrders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
    };
  }

  componentDidMount() {
    this.props.navigation.addListener('focus', this._getOutstandingPurchasingOrders);
  }

  componentWillUnmount() {
    this.props.navigation.removeListener('focus');
  }

  _getOutstandingPurchasingOrders = () => {
    this.props.getOutstandingPurchasingOrders(
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

  _renderOutstandingPurchasingOrders = (item) => {

    console.log('gettgtttttt fabricsasad',item)
    return <OutstandingPurchasingOrdersCards



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
  data={this.props.outstanding_purchasing_orders}
  renderItem={this._renderOutstandingPurchasingOrders}
  contentContainerStyle={{paddingBottom:10*vh}}
  />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('Purchasing orders state',state)
  return {
    outstanding_purchasing_orders: state.GeneralReducer.outstanding_purchasing_orders,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getOutstandingPurchasingOrders: (success, error) =>
      dispatch(actions.getOutstandingPurchasingOrders(success, error)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OutstandingPurchasingOrders);
