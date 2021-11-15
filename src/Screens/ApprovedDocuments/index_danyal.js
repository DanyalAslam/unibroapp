import React from 'react';
import { View, Text, ToastAndroid, Platform, ScrollView, Image } from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';
import actions from '../../redux/actions/index';
import { LineChart, PieChart, BarChart } from 'react-native-chart-kit'
import { vh, vw } from '../../Utils/Units';
import PoppinsRegular from '../../Components/Text/PoppinsRegular'
import PoppinsBold from '../../Components/Text/PoppinsBold'
import YearGraphDataPopup from '../../Components/Popups/YearGraphDataPopup'
import { TouchableOpacity } from 'react-native-gesture-handler';
import MainInput from '../../Components/Input/MainInput';
import { icons } from '../../assets/images'
import DropDown from '../../Components/DropDown'




class ApprovedDocuments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      selected_buyer_company: '',
      selected_buyer_year: '',

      selected_country_company: '',
      selected_country_year: ''
    };
  }


  _getDocumentDetails = () => {
    this.props.getDocumentDetails(
      (success) => {
        if (success) {
          this.setState({
            sessions: this.props.streamData,
          });
        }
      },
      (error) => {
        showToast(error);
      },
    );
  }

  _getShipmentBuyerWise = () => {
    this.props.getShipmentBuyerWise(
      (success) => {
        if (success) {
          this.setState({
            sessions: this.props.streamData,
          });
        }
      },
      (error) => {
        showToast(error);
      },
    );
  }

  _getShipmentCountryWise = () => {
    this.props.getShipmentCountryWise(
      (success) => {
        if (success) {
          this.setState({
            sessions: this.props.streamData,
          });
        }
      },
      (error) => {
        showToast(error);
      },
    );
  }



  _getBookedPieceGoodsOrders = () => {
    this.props.getBookedPieceGoodsOrders(
      (success) => {
        if (success) {
          this.setState({
            sessions: this.props.streamData,
          });
        }
      },
      (error) => {
        showToast(error);
      },
    );
  }

  _getSearchedShipmentBuyerWise = () => {


    this.props.getSearchedShipmentBuyerWise(
      (success) => {
        if (success) {
          this.setState({
            sessions: this.props.streamData,
          });
        }
      },
      (error) => {
        showToast(error);
      },
      this.state.selected_buyer_company,
      this.state.selected_buyer_year
    );



  }

  _getSearchedShipmentCountryWise = () => {
    this.props.getSearchedShipmentCountryWise(
      (success) => {
        if (success) {
          this.setState({
            sessions: this.props.streamData,
          });
        }
      },
      (error) => {
        showToast(error);
      },
      this.state.selected_country_company,
      this.state.selected_country_year
    );
  }

  _getTableGraphData = () => {
    this.props.getTableGraphData(
      (success) => {
        if (success) {
          this.setState({
            sessions: this.props.streamData,
          });
        }
      },
      (error) => {
        showToast(error);
      },
    );

  }

  _getTableGreyGabricSupplierWise = () => {
    this.props.getTableGreyGabricSupplierWise(
      (success) => {
        if (success) {
          this.setState({
            sessions: this.props.streamData,
          });
        }
      },
      (error) => {
        showToast(error);
      },
    );

  }

  _getMadeUpChart = () => {
    this.props.getMadeUpChart(
      (success) => {
        if (success) {
          this.setState({
            sessions: this.props.streamData,
          });
        }
      },
      (error) => {
        showToast(error);
      },
    );
  }

  _getOptions = () => {

    this.props.getApprovedDocumentsOptions(
      this?.props?.user_code,
      (success) => {
        if (success) {
          this.setState({
            sessions: this.props.streamData,
          });
        }
      },
      (error) => {
        showToast(error);
      },
    );
  }


  _getHomeData = () => {

    this._getOptions()
    this._getDocumentDetails()

  };

  componentDidMount() {

    this.props.navigation.addListener('focus', this._getHomeData);
  }

  onSelectFirstOption = () => {

    this.CompanyDropDown.show(
      'title',
      ["Apprpved", "DisApproved"],
      'Select Option 1',
      // (data) =>
      //   this.setState({
      //     request_data: {
      //       ...this.state.request_data,
      //       blood_group: data.title,
      //     },
      //   }),
      (data) => this.setState({ selected_buyer_company: data }),
      null,
      null,
    );






  }

  onSelectSecondOption = () => {

    this.CompanyDropDown.show(
      'title',
      this.props.approved_documents_options,
      'Select Option 2',
      // (data) =>
      //   this.setState({
      //     request_data: {
      //       ...this.state.request_data,
      //       blood_group: data.title,
      //     },
      //   }),
      // (data) => this.setState({ selected_country_year: data }),
      null,
      null,
    );





  }


  renderRow = (data, index) => {
    console.log('getttting dataaa', data)
    console.log('index', index)

    if (index === 0) {
      return (<View style={{ backgroundColor: '#fff', flex: 1, height: 10 * vh, alignSelf: 'stretch', flexDirection: 'row', marginHorizontal: 5 }}>

        <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }} >
          <Text style={{ color: '#012c65', fontWeight: 'bold' }}>PO.NO</Text>
        </View>


        <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }} >
          <Text style={{ color: '#012c65', fontWeight: 'bold' }}>Supplier</Text>
        </View>
        <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }} >
          <Text style={{ color: '#012c65', fontWeight: 'bold' }}>Prepared By</Text>
        </View>
      </View>
      );

    }
    else {
      return (
        <View style={{ flex: 1, alignSelf: 'stretch', borderBottomColor: 'black', borderBottomWidth: 0.3, height: 10 * vh, backgroundColor: '#fff', marginHorizontal: 5, backgroundColor: '#ffF' }}>
          <View style={{ flexDirection: 'row', height: 4 * vh, backgroundColor: '#fff' }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingLeft: 7 }} >
              <PoppinsRegular style={{ fontSize: 2 * vw }}>{data.poNo}</PoppinsRegular></View>
            <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }} >
              <PoppinsRegular style={{ fontSize: 2 * vw }}>{data.Supplier}</PoppinsRegular>
            </View>
            <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }} >
              <PoppinsRegular style={{ fontSize: 2 * vw }}>{data.Amount}</PoppinsRegular>
            </View>
          </View>

          <View style={{ height: 6 * vh, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
            <Image
              style={{ width: 4 * vw, height: 3 * vh, marginRight: 4 * vw }}
              source={{ uri: data.View }}
              resizeMode='contain'
            />
            <Image
              style={{ width: 4 * vw, height: 4 * vh, marginRight: 4 * vw }}
              source={{ uri: data.Approve }}
              resizeMode='contain'
            />
            <Image
              style={{ width: 4 * vw, height: 4 * vh, marginRight: 4 * vw }}
              source={{ uri: data.Delete }}
              resizeMode='contain'
            />
          </View>


        </View>
      );

    }

  }


  _renderSecondGraph = () => {


    if (typeof this.props.approved_documents_details !== 'undefined') {
      return (

        <View style={styles.secondContainer}>

          {this.props?.approved_documents_details?.length === 0 ? null : this?.props?.approved_documents_details.map((datum, index) => { // This will render a row for each data element.
            return this.renderRow(datum, index);
          })

          }

        </View>)

    }
    else {
      return null

    }


  }


  _renderGreyFabricSupplierWise = () => {
    return (<><PoppinsBold style={{ fontSize: 5 * vw }}>Grey Fabric Supplier Wise</PoppinsBold>

      <View style={styles.secondContainer}>
        {this?.props?.table_card_data_supplier_wise?.length === 0 ? null : this?.props?.table_card_data_supplier_wise.map((datum, index) => { // This will render a row for each data element.
          return this.renderRowSupplierWise(datum, index);
        })

        }

      </View></>)
  }




  _renderShipmentBuyerWiseGraph = () => {
    return (<>

      <PoppinsBold style={{ fontSize: 5 * vw }}>Shipment Buyer Wise</PoppinsBold>
      <View style={styles.firstContainer}>

        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', paddingVertical: 2 * vh, alignItems: 'center' }}>

          <TouchableOpacity
            onPress={() => this.onSelectFirstOption('buyer')}

          >
            <MainInput
              label="Enter Blood Group"
              required
              placeholder="Select Company"
              value={this.state.selected_buyer_company}
              editable={false}
              style={{ width: 30 * vw, paddingHorizontal: 1 * vw }}
              fieldStyle={{ width: 20 * vw, fontSize: 2 * vw }}
              rightIcon={icons.downArrow}
            />

          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.onSelectSecondOption('buyer')}
          >
            <MainInput
              label="Enter Year"
              value={this.state.selected_buyer_year}
              required
              placeholder="Select year"
              editable={false}
              style={{ width: 30 * vw, paddingHorizontal: 1 * vw }}
              fieldStyle={{ width: 20 * vw, fontSize: 2 * vw }}
              rightIcon={icons.downArrow}
            />

          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this._getSearchedShipmentBuyerWise()}
          >
            <Image
              source={icons.searchBlue}
              style={{ height: 4 * vh, width: 4 * vw }}
              resizeMode="contain"
            />

          </TouchableOpacity>

        </View>


        {this.props?.shipment_buyer_wise_Data?.length === 0 ? null : <BarChart


          data={this?.props?.shipment_buyer_wise_Data}
          width={90 * vw}
          height={40 * vh}
          chartConfig={{
            barPercentage: 0.3,
            propsForVerticalLabels: { fontSize: 2 * vw },
            propsForHorizontalLabels: { fontSize: 2 * vw },
            backgroundGradientFrom: "#fff",
            backgroundGradientFromOpacity: 0,
            backgroundGradientTo: "#fff",
            backgroundGradientToOpacity: 0.5,
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(0, 128, 0, ${opacity})`,
            labelColor: (opacity = 0) => `rgba(0, 0, 0, ${opacity})`,
            propsForBackgroundLines: {
              strokeWidth: 0.6,

            }
          }}


        />}

      </View></>
    )
  }

  _renderShipmentCountryWiseGraph = () => {
    return (<>

      <PoppinsBold style={{ fontSize: 5 * vw }}>Shipment Country Wise</PoppinsBold>
      <View style={styles.firstContainer}>

        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', paddingVertical: 2 * vh, alignItems: 'center' }}>

          <TouchableOpacity
            onPress={() => this.onSelectFirstOption('country')}

          >
            <MainInput
              label="Enter Blood Group"
              required
              placeholder="Select Company"
              value={this.state.selected_country_company}
              editable={false}
              style={{ width: 30 * vw, paddingHorizontal: 1 * vw }}
              fieldStyle={{ width: 20 * vw, fontSize: 2 * vw }}
              rightIcon={icons.downArrow}
            />

          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.onSelectSecondOption('country')}
          >
            <MainInput
              label="Enter Year"
              value={this.state.selected_country_year}
              required
              placeholder="Select year"
              editable={false}
              style={{ width: 30 * vw, paddingHorizontal: 1 * vw }}
              fieldStyle={{ width: 20 * vw, fontSize: 2 * vw }}
              rightIcon={icons.downArrow}
            />

          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this._getSearchedShipmentCountryWise('country')}
          >
            <Image
              source={icons.searchBlue}
              style={{ height: 4 * vh, width: 4 * vw }}
              resizeMode="contain"
            />

          </TouchableOpacity>

        </View>


        {this.props?.shipment_country_wise_Data?.length === 0 ? null : <BarChart


          data={this?.props?.shipment_country_wise_Data}
          width={90 * vw}
          height={40 * vh}
          chartConfig={{
            barPercentage: 0.3,
            propsForVerticalLabels: { fontSize: 2 * vw },
            propsForHorizontalLabels: { fontSize: 2 * vw },
            backgroundGradientFrom: "#fff",
            backgroundGradientFromOpacity: 0,
            backgroundGradientTo: "#fff",
            backgroundGradientToOpacity: 0.5,
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(0, 128, 0, ${opacity})`,
            labelColor: (opacity = 0) => `rgba(0, 0, 0, ${opacity})`,
            propsForBackgroundLines: {
              strokeWidth: 0.6,

            }
          }}


        />}

      </View></>


    )
  }



  render() {
    console.log('checllllllllll', this.props.approved_documents_details)
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>

        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', paddingVertical: 2 * vh, alignItems: 'center' }}>

          <TouchableOpacity
            onPress={() => this.onSelectFirstOption()}

          >
            <MainInput
              label="Enter Blood Group"
              required
              placeholder="Select an option"
              value={this.state.selected_buyer_company}
              editable={false}
              style={{ width: 30 * vw, paddingHorizontal: 1 * vw }}
              fieldStyle={{ width: 20 * vw, fontSize: 2 * vw }}
              rightIcon={icons.downArrow}
            />

          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.onSelectSecondOption()}
          >
            <MainInput
              label="Enter Year"
              value={this.state.selected_buyer_year}
              required
              placeholder="Select an option"
              editable={false}
              style={{ width: 30 * vw, paddingHorizontal: 1 * vw }}
              fieldStyle={{ width: 20 * vw, fontSize: 2 * vw }}
              rightIcon={icons.downArrow}
            />

          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this._getSearchedShipmentBuyerWise()}
          >
            <Image
              source={icons.searchBlue}
              style={{ height: 4 * vh, width: 4 * vw }}
              resizeMode="contain"
            />

          </TouchableOpacity>

        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ alignItems: 'center', paddingBottom: 10 * vh }}
          style={styles.container}
        >{this._renderSecondGraph()}</ScrollView>

        <DropDown ref={(e) => (this.CompanyDropDown = e)} />
      </View>
    );
  }
}




const mapStateToProps = (state) => {

  return {

    approved_documents_options: state.GeneralReducer.approved_documents_options,
    approved_documents_details: state.GeneralReducer.approved_documents_details,

    user_code: state.GeneralReducer.user_code,

  };
};


const mapDispatchToProps = (dispatch) => {
  return {


    getApprovedDocumentsOptions: (keyword, success, error) =>
      dispatch(actions.getApprovedDocumentsOptions(keyword, success, error)),

    getDocumentDetails: (success, error) =>
      dispatch(actions.getDocumentDetails(success, error)),



  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ApprovedDocuments);
