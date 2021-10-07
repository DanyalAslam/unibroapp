import React from 'react';
import { FlatList, View, Text } from 'react-native';
import styles from './styles';
import BookedOrdersCards from '../../Components/Sections/BookedOrdersCards';
import { connect } from 'react-redux';
import actions from '../../redux/actions/index';
import { vh } from '../../Utils/Units';


class BookedOrders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
    };
  }

  componentDidMount() {
    this.props.navigation.addListener('focus', this._getBookedOrders);
  }

  componentWillUnmount() {
    this.props.navigation.removeListener('focus');
  }

  _getBookedOrders = () => {
    this.props.getBookedOrders(
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

  _renderBookedOrders = (item) => {

    console.log('gettgtttttt fabricsasad',item)
    return <BookedOrdersCards



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
  renderItem={this._renderBookedOrders}
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
    getBookedOrders: (success, error) =>
      dispatch(actions.getBookedOrders(success, error)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BookedOrders);
