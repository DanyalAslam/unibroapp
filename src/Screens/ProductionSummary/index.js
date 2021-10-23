import React from 'react';
import { FlatList, View, Text } from 'react-native';
import styles from './styles';
import ProductionSummaryCards from '../../Components/Sections/ProductionSummaryCards';
import { connect } from 'react-redux';
import actions from '../../redux/actions/index';
import { vh,vw } from '../../Utils/Units';
import MainInput from '../../Components/Input/MainInput';


class ProductionSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
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
  data={this.props.production_summary}
  renderItem={this._renderProductionSummary}
  contentContainerStyle={{paddingBottom:10*vh}}
  />
      </View>
    );
  }
}

const mapStateToProps = (state) => {

  return {
    production_summary: state.GeneralReducer.production_summary,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProductionSummary: (success, error) =>
      dispatch(actions.getProductionSummary(success, error)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductionSummary);
