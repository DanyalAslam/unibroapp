import React from 'react';
import { FlatList, View, Text } from 'react-native';
import styles from './styles';
import CountryWiseExportCards from '../../Components/Sections/CountryWiseExportCards';
import { connect } from 'react-redux';
import actions from '../../redux/actions/index';
import { vh } from '../../Utils/Units';


class CountryWiseExport extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
    };
  }

  componentDidMount() {
    this.props.navigation.addListener('focus', this._getCountryWiseExport);
  }

  componentWillUnmount() {
    this.props.navigation.removeListener('focus');
  }

  _getCountryWiseExport = () => {
    this.props.getCountryWiseExport(
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

  _renderCountryWiseExport = (item) => {

    console.log('gettgtttttt fabricsasad',item)
    return <CountryWiseExportCards



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
  data={this.props.country_wise_export}
  renderItem={this._renderCountryWiseExport}
  contentContainerStyle={{paddingBottom:10*vh}}
  />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('Purchasing orders state',state)
  return {
    country_wise_export: state.GeneralReducer.country_wise_export,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCountryWiseExport: (success, error) =>
      dispatch(actions.getCountryWiseExport(success, error)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CountryWiseExport);
