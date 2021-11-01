import React from 'react';
import { FlatList, View, Text, ActivityIndicator } from 'react-native';
import styles from './styles';
import CountryWiseExportCards from '../../Components/Sections/CountryWiseExportCards';
import { connect } from 'react-redux';
import actions from '../../redux/actions/index';
import { vh, vw } from '../../Utils/Units';
import PoppinsBold from '../../Components/Text/PoppinsBold'
import PoppinsRegular from '../../Components/Text/PoppinsRegular'
import MainInput from '../../Components/Input/MainInput';

class CountryWiseExport extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      keyword: ''
    };
  }

  componentDidMount() {
    this.props.navigation.addListener('focus', this._getCountryWiseExport);
  }

  renderRow = (data, index) => {

    if (index === 0) {
      return (<View style={{ backgroundColor: '#fff', flex: 1, height: 10 * vh, alignSelf: 'stretch', flexDirection: 'row', marginHorizontal: 5 }}>

        <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }} >
          <Text style={{ color: '#012c65', fontWeight: 'bold' }}>Country</Text>
        </View>



        <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }} >
          <Text style={{ color: '#012c65', fontWeight: 'bold' }}>Fcy</Text>
        </View>
      </View>
      );

    }
    else {
      return (
        <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row', borderBottomColor: 'black', borderBottomWidth: 0.3, height: 50, backgroundColor: '#fff', marginHorizontal: 5 }}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingLeft: 7 }} >
            <PoppinsRegular style={{ fontSize: 2.5 * vw, color: 'black', fontWeight: 'bold' }}>{data.countryname}</PoppinsRegular>
          </View>

          <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }} >

            <PoppinsRegular style={{ fontSize: 2.5 * vw, color: 'black', fontWeight: 'bold' }}>{data.fcy}</PoppinsRegular>

          </View>


        </View>
      );

    }

  }


  componentWillUnmount() {
    this.props.navigation.removeListener('focus');
  }

  _getCountryWiseExport = () => {
    this.props.getCountryWiseExport(
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

  _renderCountryWiseExport = (item) => {

    console.log('gettgtttttt fabricsasad', item)
    return (<>

      <View style={styles.secondContainer}>
        {this.props?.country_wise_export?.length === 0 ? null : this?.props?.country_wise_export.map((datum, index) => { // This will render a row for each data element.
          return this.renderRow(datum, index);
        })

        }

      </View></>)
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

      const search = await this.props.getCountryWiseExport(data.keyword, success => { }, error => { });
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
            


            marginTop: 2 * vh,
            alignSelf: 'center'
          }}>

          <MainInput
            placeholder=" Search Countrywise Export"
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
          data={this.props.country_wise_export}
          renderItem={this._renderCountryWiseExport}
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

    country_wise_export: state.GeneralReducer.country_wise_export,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCountryWiseExport: (keyword, success, error) =>
      dispatch(actions.getCountryWiseExport(keyword, success, error)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CountryWiseExport);
