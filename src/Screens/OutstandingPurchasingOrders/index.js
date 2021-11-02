import React from 'react';
import { FlatList, View, ActivityIndicator } from 'react-native';
import styles from './styles';
import OutstandingPurchasingOrdersCards from '../../Components/Sections/OutstandingPurchasingOrdersCards';
import { connect } from 'react-redux';
import actions from '../../redux/actions/index';
import { vh, vw } from '../../Utils/Units';
import MainInput from '../../Components/Input/MainInput';


class OutstandingPurchasingOrders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      keyword: '',
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

  _renderOutstandingPurchasingOrders = (item) => {
    return <OutstandingPurchasingOrdersCards



      // onSuccess={() =>
      //   this.props.navigation.navigate('WatchStreanScreen', { item })
      // }
      stock={item}

    />;
  };


  onStateChange = (type, text) => {
    this.setState({
      [type]: text,
    }, () => this._search());
  };
  _search = async () => {
    try {
      let data = {
        keyword: this.state.keyword,
      };

      const search = await this.props.getOutstandingPurchasingOrders(data.keyword, success => { }, error => { });
    } catch (error) {
      showToast(error);
    }
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


            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: 0.34,
            shadowRadius: 6.27,

            elevation: 10,



            marginTop: 2 * vh
          }}>

          <MainInput
            placeholder=" Search Outstanding Purchase Order"
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

        {this.props.activity_loading ? <ActivityIndicator size="small" color="#012c65"
          style={{ paddingVertical: 3 * vh }}
        /> : null

        }
        <FlatList
          showsVerticalScrollIndicator={false}
          data={this.props.outstanding_purchasing_orders}
          renderItem={this._renderOutstandingPurchasingOrders}
          contentContainerStyle={{ paddingBottom: 10 * vh }}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    activity_loading: state.GeneralReducer.activity_loading,

    outstanding_purchasing_orders: state.GeneralReducer.outstanding_purchasing_orders,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getOutstandingPurchasingOrders: (keyword, success, error) =>
      dispatch(actions.getOutstandingPurchasingOrders(keyword, success, error)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OutstandingPurchasingOrders);
