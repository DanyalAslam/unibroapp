import React from 'react';
import { FlatList, View, Text } from 'react-native';
import styles from './styles';
import CountryWiseExportCards from '../../Components/Sections/CountryWiseExportCards';
import { connect } from 'react-redux';
import actions from '../../redux/actions/index';
import { vh,vw} from '../../Utils/Units';
import PoppinsBold from '../../Components/Text/PoppinsBold'
import PoppinsRegular from '../../Components/Text/PoppinsRegular'
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

  renderRow = (data, index) => {
    console.log('getttting dataaa123', data)
    console.log('index', index)

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
    return  (<>

      <View style={styles.secondContainer}>
        {this.props?.country_wise_export?.length === 0 ? null : this?.props?.country_wise_export.map((datum, index) => { // This will render a row for each data element.
          return this.renderRow(datum, index);
        })

        }

      </View></>)
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
