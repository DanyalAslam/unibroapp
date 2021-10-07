import React from 'react';
import { FlatList, View, Text } from 'react-native';
import styles from './styles';
import DailyProductionCards from '../../Components/Sections/DailyProductionCards';
import { connect } from 'react-redux';
import actions from '../../redux/actions/index';
import { vh } from '../../Utils/Units';


class DailyProduction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
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

    console.log('gettgtttttt fabricsasad',item)
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
  <FlatList 
  showsVerticalScrollIndicator={false}
  data={this.props.daily_production}
  renderItem={this._renderDailyProduction}
  contentContainerStyle={{paddingBottom:10*vh}}
  />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('Purchasing orders state',state)
  return {
    daily_production: state.GeneralReducer.daily_production,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getDailyProduction: (success, error) =>
      dispatch(actions.getDailyProduction(success, error)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DailyProduction);
