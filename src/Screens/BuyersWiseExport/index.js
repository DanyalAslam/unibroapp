import React from 'react';
import { FlatList, View, Text } from 'react-native';
import styles from './styles';
import BuyersWiseExportCards from '../../Components/Sections/BuyersWiseExportCards';
import { connect } from 'react-redux';
import actions from '../../redux/actions/index';
import { vh } from '../../Utils/Units';


class BuyersWiseExport extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
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

    console.log('gettgtttttt fabricsasad',item)
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
  <FlatList 
  showsVerticalScrollIndicator={false}
  data={this.props.purchasing_orders}
  renderItem={this._renderBuyersWiseExport}
  contentContainerStyle={{paddingBottom:10*vh}}
  />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('Purchasing orders state',state)
  return {
    purchasing_orders: state.GeneralReducer.purchasing_orders,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getBuyersWiseExport: (success, error) =>
      dispatch(actions.getBuyersWiseExport(success, error)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BuyersWiseExport);
