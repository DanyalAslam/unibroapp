import React from 'react';
import { FlatList, View, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import styles from './styles';
import StockCards from '../../Components/Sections/StockCards';
import { connect } from 'react-redux';
import actions from './../../redux/actions/index';
import { vh, vw } from '../../Utils/Units';
import MainInput from '../../Components/Input/MainInput';

import { icons } from '../../assets/images'

class StockInHand extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      keyword: '',
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

  _renderStockInHand = (item) => {
    return <StockCards



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

      const search = await this.props.getStockInHands(data.keyword, success => { }, error => { });
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
            placeholder=" Search Stock In Hand"
            style={styles.inputField}
            onChangeText={(keyword) => this.onStateChange('keyword', keyword)}
          />


        </View>

        {this.props.activity_loading ? <ActivityIndicator size="small" color="#012c65"
          style={{ paddingVertical: 3 * vh }}
        /> : null

        }

        <FlatList
          showsVerticalScrollIndicator={false}
          data={this.props.stock_in_hand}
          renderItem={this._renderStockInHand}
          contentContainerStyle={{ paddingBottom: 10 * vh }}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('Employee state', state)
  return {
    activity_loading: state.GeneralReducer.activity_loading,

    stock_in_hand: state.GeneralReducer.stock_in_hand,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getStockInHands: (keyword, success, error) =>
      dispatch(actions.getStockInHands(keyword, success, error)),


  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StockInHand);
