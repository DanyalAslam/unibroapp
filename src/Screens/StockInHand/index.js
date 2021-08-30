import React from 'react';
import { FlatList, View, Text } from 'react-native';
import styles from './styles';
import EmployeeCards from '../../Components/Sections/EmployeeCards';
import { connect } from 'react-redux';
import actions from './../../redux/actions/index';
import { vh } from '../../Utils/Units';
// import PoppinsRegular from '../../Components/Text/PoppinsRegular';

// import ThemeColors from '../../Utils/ThemeColors';
// import { vh, vw } from '../../Utils/Units';
// import reactNativeEasyPushNotifications from 'react-native-easy-push-notifications';



class StockInHand extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
    };
  }

  componentDidMount() {
    this.props.navigation.addListener('focus', this._getStockInHands);
  }

  componentWillUnmount() {
    this.props.navigation.removeListener('focus');
  }

  _getStockInHands = () => {
    this.props.getStockInHands(
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

  _renderStockInHand = (item) => {
    return <EmployeeCards



      // onSuccess={() =>
      //   this.props.navigation.navigate('WatchStreanScreen', { item })
      // }
      employee={item} 
      
      />;
  };
  render() {

    return (
      <View style={styles.container}>
  <FlatList 
  showsVerticalScrollIndicator={false}
  data={this.props.all_employees_profile}
  renderItem={this._renderStockInHand}
  contentContainerStyle={{paddingBottom:10*vh}}
  />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('Employee state',state)
  return {
    stock_in_hand: state.GeneralReducer.stock_in_hand,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getStockInHands: (success, error) =>
      dispatch(actions.getStockInHands(success, error)),

  
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StockInHand);
