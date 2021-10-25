import React from 'react';
import { FlatList, View, Text } from 'react-native';
import styles from './styles';
import GreyCards from '../../Components/Sections/GreyCards';
import { connect } from 'react-redux';
import actions from '../../redux/actions/index';
import { vh, vw } from '../../Utils/Units';

import MainInput from '../../Components/Input/MainInput';

class Grey extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      keyword: ''
    };
  }

  componentDidMount() {
    this.props.navigation.addListener('focus', this._getGreys);
  }

  componentWillUnmount() {
    this.props.navigation.removeListener('focus');
  }

  _getGreys = () => {
    this.props.getGreys(
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

  _renderGrey = (item) => {

    console.log('gettgtttttt fabricsasad', item)
    return <GreyCards



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
            placeholder=" Search Grey"
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
          data={this.props.grey_fabric}
          renderItem={this._renderGrey}
          contentContainerStyle={{ paddingBottom: 10 * vh }}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('Employee state', state)
  return {
    grey_fabric: state.GeneralReducer.grey_fabric,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getGreys: (keyword, success, error) =>
      dispatch(actions.getGreys(keyword, success, error)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Grey);
