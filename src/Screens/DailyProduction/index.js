import React from 'react';
import { FlatList, View, ActivityIndicator } from 'react-native';
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




      onSuccess={(id) => this.props.navigation.navigate('ViewReports', { id: id, role: 'DailyProduction' })}
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
            placeholder=" Search Daily Production"
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
    activity_loading: state.GeneralReducer.activity_loading,

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
