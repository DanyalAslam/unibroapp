import React from 'react';
import { FlatList, View, ActivityIndicator } from 'react-native';
import styles from './styles';
import ProductionSummaryCards from '../../Components/Sections/ProductionSummaryCards';
import { connect } from 'react-redux';
import actions from '../../redux/actions/index';
import { vh, vw } from '../../Utils/Units';
import MainInput from '../../Components/Input/MainInput';


class ProductionSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      keyword: '',
    };
  }

  componentDidMount() {
    this.props.navigation.addListener('focus', this._getProductionSummary);
  }

  componentWillUnmount() {
    this.props.navigation.removeListener('focus');
  }

  _getProductionSummary = () => {
    this.props.getProductionSummary(
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

  _renderProductionSummary = (item) => {

    return <ProductionSummaryCards



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

      const search = await this.props.getProductionSummary(data.keyword, success => { }, error => { });
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
            placeholder=" Search Purchase Order"
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
          data={this.props.production_summary}
          renderItem={this._renderProductionSummary}
          contentContainerStyle={{ paddingBottom: 10 * vh }}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {

  return {
    activity_loading: state.GeneralReducer.activity_loading,

    production_summary: state.GeneralReducer.production_summary,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProductionSummary: (keyword, success, error) =>
      dispatch(actions.getProductionSummary(keyword, success, error)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductionSummary);
