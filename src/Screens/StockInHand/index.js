import React from 'react';
import { FlatList, View, Image } from 'react-native';
import styles from './styles';
import StockCards from '../../Components/Sections/StockCards';
import { connect } from 'react-redux';
import actions from './../../redux/actions/index';
import { vh, vw } from '../../Utils/Units';
import MainInput from '../../Components/Input/MainInput';



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
            elevation: 2 * vw,
            marginTop: 2 * vh
          }}>

          <MainInput
            placeholder=" Search Stock In Hand"
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
