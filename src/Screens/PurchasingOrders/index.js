import React from 'react';
import { FlatList, View, Text } from 'react-native';
import styles from './styles';
import PurchasingOrdersCards from '../../Components/Sections/PurchasingOrdersCards';
import { connect } from 'react-redux';
import actions from '../../redux/actions/index';
import { vh, vw } from '../../Utils/Units';
import MainInput from '../../Components/Input/MainInput';

class PurchasingOrders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      keyword: '',
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
      this.state.keyword,
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
        <View
          style={{
            height: 6 * vh,
            width: 90 * vw,
            borderRadius: 2 * vw,
            backgroundColor: '#FFFFFF',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 5 * vw,
            alignItems: 'center',
            elevation: 2 * vw,
            marginTop: 2 * vh
          }}>

          <MainInput
            placeholder=" Search Purchase Order"
            style={styles.inputField}
            onChangeText={(keyword) => this.onStateChange('keyword', keyword)}
          />

          {/* <TouchableOpacity onPress={this._search}>
            <Image
              resizeMode="contain"
              style={{ height: 5 * vh, width: 5 * vw }}
              source={icons.searchBlue}
            />
          </TouchableOpacity> */}
        </View>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={this.props.purchasing_orders}
          renderItem={this._renderPurchasingOrders}
          contentContainerStyle={{ paddingBottom: 10 * vh }}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {

  return {
    purchasing_orders: state.GeneralReducer.purchasing_orders,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPurchasingOrders: (keyword, success, error) =>
      dispatch(actions.getPurchasingOrders(keyword, success, error)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PurchasingOrders);
