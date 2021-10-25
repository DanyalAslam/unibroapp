import React from 'react';
import { FlatList, View, Text } from 'react-native';
import styles from './styles';
import DailyProductionCards from '../../Components/Sections/DailyProductionCards';
import { connect } from 'react-redux';
import actions from '../../redux/actions/index';
import { vh, vw } from '../../Utils/Units';
import MainInput from '../../Components/Input/MainInput';


class DailyProduction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      keyword: '',
    };
  }

  componentDidMount() {
    this.props.navigation.addListener('focus', this._getDailyProduction);
  }

  componentWillUnmount() {
    this.props.navigation.removeListener('focus');
  }

  _getDailyProduction = () => {
    this.props.getDailyProduction(
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

  _renderDailyProduction = (item) => {

    console.log('gettgtttttt fabricsasad', item)
    return <DailyProductionCards



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
          data={this.props.daily_production}
          renderItem={this._renderDailyProduction}
          contentContainerStyle={{ paddingBottom: 10 * vh }}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('Purchasing orders state', state)
  return {
    daily_production: state.GeneralReducer.daily_production,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getDailyProduction: (keyword, success, error) =>
      dispatch(actions.getDailyProduction(keyword, success, error)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DailyProduction);
