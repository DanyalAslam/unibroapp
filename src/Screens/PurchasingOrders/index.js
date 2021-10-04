import React from 'react';
import { FlatList, View, Text } from 'react-native';
import styles from './styles';
import PurchasingOrdersCards from '../../Components/Sections/PurchasingOrdersCards';
import { connect } from 'react-redux';
import actions from '../../redux/actions/index';
import { vh } from '../../Utils/Units';


class PurchasingOrders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
    };
  }

  componentDidMount() {
    this.props.navigation.addListener('focus', this._getPurchasingOrders);
  }

  componentWillUnmount() {
    this.props.navigation.removeListener('focus');
  }

  _getPurchasingOrders = () => {
    this.props.getPurchasingOrders(
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

  _renderPurchasingOrders = (item) => {

    console.log('gettgtttttt fabricsasad',item)
    return <PurchasingOrdersCards



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
  renderItem={this._renderPurchasingOrders}
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
    getPurchasingOrders: (success, error) =>
      dispatch(actions.getPurchasingOrders(success, error)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PurchasingOrders);
