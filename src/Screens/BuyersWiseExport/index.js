import React from 'react';
import { FlatList, View, ActivityIndicator } from 'react-native';
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

      const search = await this.props.getBuyersWiseExport(data.keyword, success => { }, error => { });
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
            placeholder=" Search Buyerwise Export"
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
    activity_loading: state.GeneralReducer.activity_loading,

    buyer_wise_export: state.GeneralReducer.buyer_wise_export,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getBuyersWiseExport: (keyword, success, error) =>
      dispatch(actions.getBuyersWiseExport(keyword, success, error)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BuyersWiseExport);
