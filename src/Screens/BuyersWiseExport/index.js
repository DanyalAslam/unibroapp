import React from 'react';
import { FlatList, View, Text } from 'react-native';
import styles from './styles';
import BuyersWiseExportCards from '../../Components/Sections/BuyersWiseExportCards';
import { connect } from 'react-redux';
import actions from '../../redux/actions/index';
import { vh, vw } from '../../Utils/Units';
import MainInput from '../../Components/Input/MainInput';


class BuyersWiseExport extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      keyword: ''
    };
  }

  componentDidMount() {
    this.props.navigation.addListener('focus', this._getBuyersWiseExport);
  }

  componentWillUnmount() {
    this.props.navigation.removeListener('focus');
  }

  _getBuyersWiseExport = () => {
    this.props.getBuyersWiseExport(
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

  _renderBuyersWiseExport = (item) => {

    console.log('_renderBuyersWiseExport', item)
    return <BuyersWiseExportCards



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
            placeholder=" Search Employee Emails"
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
          data={this.props.buyer_wise_export}
          renderItem={this._renderBuyersWiseExport}
          contentContainerStyle={{ paddingBottom: 10 * vh }}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('Purchasing orders state', state)
  return {
    buyer_wise_export: state.GeneralReducer.buyer_wise_export,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getBuyersWiseExport: (keyword, keywordsuccess, error) =>
      dispatch(actions.getBuyersWiseExport(keyword, success, error)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BuyersWiseExport);
