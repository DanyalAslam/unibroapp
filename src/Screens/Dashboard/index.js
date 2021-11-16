import React from 'react';
import { View, Text, ToastAndroid, FlatList, ScrollView, Image, ImageBackground } from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';
import actions from './../../redux/actions/index';
import { LineChart, PieChart, BarChart } from 'react-native-chart-kit'
import { vh, vw } from '../../Utils/Units';
import PoppinsRegular from '../../Components/Text/PoppinsRegular'
import PoppinsBold from '../../Components/Text/PoppinsBold'
import YearGraphDataPopup from '../../Components/Popups/YearGraphDataPopup'
import { TouchableOpacity } from 'react-native-gesture-handler';
import MainInput from '../../Components/Input/MainInput';
import { icons } from '../../assets/images'
import DropDown from '../../Components/DropDown'
import Carousel, { Pagination } from 'react-native-snap-carousel';

const chartConfig = {
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
};



const chartConfigMadeUp = {
  backgroundGradientFrom: "red",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "red",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2,
  barPercentage: 0.5,
  useShadowColorFromDataset: false
};
export const ENTRIES1 = [
  {
    title: 'Beautiful and dramatic Antelope Canyon',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://i.imgur.com/UYiroysl.jpg'
  },
  {
    title: 'Earlier this morning, NYC',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/UPrs1EWl.jpg'
  },
  {
    title: 'White Pocket Sunset',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    illustration: 'https://i.imgur.com/MABUbpDl.jpg'
  },
  {
    title: 'Acrocorinth, Greece',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://i.imgur.com/KZsmUi2l.jpg'
  },
  {
    title: 'The lone tree, majestic landscape of New Zealand',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/2nCt3Sbl.jpg'
  },
  {
    title: 'Middle Earth, Germany',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/lceHsT6l.jpg'
  }
];
class AboutUsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      selected_buyer_company: '',
      selected_buyer_year: '',

      selected_country_company: '',
      selected_country_year: '',
      activeSlide: 0,
    };
  }

  _renderItem = ({ item, index }) => {
    console.log('The Item of carousel:', item);
    return (
      <View

        style={{
          width: vw * 25,
          height: vh * 20,

          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'yellow',
          elevation: 2 * vw,
          borderRadius: 2 * vw,
          backgroundColor: '#fff',
          margin: 2 * vw

        }}
      >

        <PoppinsBold style={{color:'#012c65'}}>{item.title}</PoppinsBold>
        <PoppinsRegular style={{fontSize:3*vw}}>{item.value}</PoppinsRegular>

      </View>
    );
  };


  _getMonthYearGraphData = () => {
    this.props.getMonthYearGraphData(
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


  _getHomepageInformation = () => {
    this.props.getHomepageInformation(
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


  _getGrayFabrics = () => {
    this.props.getGrayFabrics(
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
    this._getHomepageInformation()
    this._getMonthYearGraphData(),
      this._getSearchedShipmentBuyerWise()
    this._getSearchedShipmentCountryWise()
    this._getShipmentBuyerWise()
    this._getShipmentCountryWise()

    this._getBookedPieceGoodsOrders()
    this._getTableGreyGabricSupplierWise()
    this._getTableGraphData(),
      this._getMadeUpChart(),
      this._getGrayFabrics()
  };

  componentDidMount() {

    this.props.navigation.addListener('focus', this._getHomeData);
  }

  renderRow = (data, index) => {
    console.log('getttting dataaa', data)
    console.log('index', index)

    if (index === 0) {
      return (<View style={{ backgroundColor: '#fff', flex: 1, height: 10 * vh, alignSelf: 'stretch', flexDirection: 'row', marginHorizontal: 5 }}>

        <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }} >
          <Text style={{ color: '#012c65', fontWeight: 'bold' }}>Quantity</Text>
        </View>


        <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }} >
          <Text style={{ color: '#012c65', fontWeight: 'bold' }}>Value</Text>
        </View>
        <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }} >
          <Text style={{ color: '#012c65', fontWeight: 'bold' }}>Amount</Text>
        </View>
      </View>
      );

    }
    else {
      return (
        <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row', borderBottomColor: 'black', borderBottomWidth: 0.3, height: 50, backgroundColor: '#fff', marginHorizontal: 5 }}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingLeft: 7 }} >
            {data[0] === "Total" ? <PoppinsRegular style={{ fontSize: 3 * vw, color: '#012c65', fontWeight: 'bold' }}>{data[0]}</PoppinsRegular> : <PoppinsRegular style={{ fontSize: 2 * vw }}>{data[0]}</PoppinsRegular>}
          </View>
          <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }} >
            {data[0] === "Total" ? <PoppinsRegular style={{ fontSize: 2.5 * vw, color: 'black', fontWeight: 'bold' }}>{data[1]}</PoppinsRegular> : <PoppinsRegular style={{ fontSize: 2 * vw }}>{data[1]}</PoppinsRegular>}
            {/* <PoppinsRegular style={{ fontSize: 2 * vw }}>{data[1]}</PoppinsRegular> */}
          </View>
          <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }} >

            {data[0] === "Total" ? <PoppinsRegular style={{ fontSize: 2.5 * vw, color: 'black', fontWeight: 'bold' }}>{data[2]}</PoppinsRegular> : <PoppinsRegular style={{ fontSize: 2 * vw }}>{data[2]}</PoppinsRegular>}
            {/* <PoppinsRegular style={{ fontSize: 2 * vw }}>{data[2]}</PoppinsRegular> */}
          </View>


        </View>
      );

    }

  }




  renderRowSupplierWise = (data, index) => {

    if (index === 0) {
      return (<View style={{ backgroundColor: '#fff', flex: 1, height: 10 * vh, alignSelf: 'stretch', flexDirection: 'row', marginHorizontal: 5 }}>

        <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }} >
          <Text style={{ color: '#012c65', fontWeight: 'bold' }}>Supplier</Text>
        </View>


        <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }} >
          <Text style={{ color: '#012c65', fontWeight: 'bold' }}>Quality</Text>
        </View>
        <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }} >
          <Text style={{ color: '#012c65', fontWeight: 'bold' }}>Amount</Text>
        </View>
      </View>
      );

    }
    else {
      return (
        <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row', borderBottomColor: 'black', borderBottomWidth: 0.3, height: 50, backgroundColor: '#fff', marginHorizontal: 5 }}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingLeft: 7 }} >
            {data[0] === "Total" ? <PoppinsRegular style={{ fontSize: 3 * vw, color: '#012c65', fontWeight: 'bold' }}>{data[0]}</PoppinsRegular> : <PoppinsRegular style={{ fontSize: 2 * vw }}>{data[0]}</PoppinsRegular>}
          </View>
          <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }} >
            {data[0] === "Total" ? <PoppinsRegular style={{ fontSize: 2.5 * vw, color: 'black', fontWeight: 'bold' }}>{data[1]}</PoppinsRegular> : <PoppinsRegular style={{ fontSize: 2 * vw }}>{data[1]}</PoppinsRegular>}
            {/* <PoppinsRegular style={{ fontSize: 2 * vw }}>{data[1]}</PoppinsRegular> */}
          </View>
          <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }} >

            {data[0] === "Total" ? <PoppinsRegular style={{ fontSize: 2.5 * vw, color: 'black', fontWeight: 'bold' }}>{data[2]}</PoppinsRegular> : <PoppinsRegular style={{ fontSize: 2 * vw }}>{data[2]}</PoppinsRegular>}
            {/* <PoppinsRegular style={{ fontSize: 2 * vw }}>{data[2]}</PoppinsRegular> */}
          </View>


        </View>
      );

    }

  }




  onSelectComapny = (Value) => {
    if (Value === 'buyer') {
      this.CompanyDropDown.show(
        'title',
        this?.props?.shipment_buyer_wise_Lists?.labels,
        'Select Company',
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
    else {
      this.CompanyDropDown.show(
        'title',
        this?.props?.shipment_country_wise_Lists?.labels,
        'Select Company',
        // (data) =>
        //   this.setState({
        //     request_data: {
        //       ...this.state.request_data,
        //       blood_group: data.title,
        //     },
        //   }),
        (data) => this.setState({ selected_country_company: data }),
        null,
        null,
      );

    }



  }

  onSelectYear = (Value) => {

    if (Value === 'buyer') {
      this.CompanyDropDown.show(
        'title',
        this.props.shipment_buyer_wise_Lists.year,
        'Select Year',
        // (data) =>
        //   this.setState({
        //     request_data: {
        //       ...this.state.request_data,
        //       blood_group: data.title,
        //     },
        //   }),
        (data) => this.setState({ selected_buyer_year: data }),
        null,
        null,
      );

    }
    else {
      this.CompanyDropDown.show(
        'title',
        this.props.shipment_country_wise_Lists.year,
        'Select Year',
        // (data) =>
        //   this.setState({
        //     request_data: {
        //       ...this.state.request_data,
        //       blood_group: data.title,
        //     },
        //   }),
        (data) => this.setState({ selected_country_year: data }),
        null,
        null,
      );


    }


  }


  _renderFirstGraph = () => {
    return (<><PoppinsBold style={{ fontSize: 5 * vw }}>Year Wise Shipment</PoppinsBold>
      <View style={styles.firstContainer}>
        {this.props.monthly_card_data.length === 0 ? null : <LineChart
          onDataPointClick={(value, dataset, getColor) => {
            this.dataShow.show(value)
          }}
          bezier
          data={this?.props?.monthly_card_data}
          width={90 * vw}
          height={40 * vh}
          chartConfig={chartConfig}
          style={{
            marginVertical: 8,
            borderRadius: 16,
            width: 20 * vw
          }}

        />}
      </View></>)
  }

  _renderPieceGoodsOrdersGraph = () => {
    return (<><PoppinsBold style={{ fontSize: 5 * vw }}>Booked Piecegoods Orders</PoppinsBold>
      <View style={styles.firstContainer}>
        {this.props.booked_piecegoods_orders_list.length === 0 ? null : <LineChart
          onDataPointClick={(value, dataset, getColor) => {
            this.dataShow.show(value)
          }}
          bezier
          data={this?.props?.booked_piecegoods_orders_list}
          width={90 * vw}
          height={40 * vh}
          chartConfig={chartConfig}
          style={{
            marginVertical: 8,
            borderRadius: 16,
            width: 20 * vw
          }}

        />}
      </View></>)
  }

  _renderSecondGraph = () => {
    return (<><PoppinsBold style={{ fontSize: 5 * vw }}>Grey Fabric Quality Wise</PoppinsBold>

      <View style={styles.secondContainer}>
        {this.props?.table_card_data?.length === 0 ? null : this?.props?.table_card_data.map((datum, index) => { // This will render a row for each data element.
          return this.renderRow(datum, index);
        })

        }

      </View></>)
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

  _renderThirdGraph = () => {
    return (<><PoppinsBold style={{ fontSize: 5 * vw }}>Made up graphs</PoppinsBold>
      {this.props.made_up_graph_data.length === 0 ? null :
        <View style={styles.firstContainer}>
          <PieChart
            data={this.props.made_up_graph_data}
            width={80 * vw}
            height={220}
            chartConfig={chartConfigMadeUp}
            accessor={"population"}
            backgroundColor="transparent"
            paddingLeft="15"
          />
        </View>
      }</>)
  }

  _renderFourthGraph = () => {
    return (<><PoppinsBold style={{ fontSize: 5 * vw }}>Grey Fabrics</PoppinsBold>
      {this.props.gray_fabrics_graph_data.length === 0 ? null :
        <View style={styles.firstContainer}>
          <PieChart
            data={this.props.gray_fabrics_graph_data}
            width={80 * vw}
            height={220}
            chartConfig={chartConfigMadeUp}
            accessor={"population"}
            backgroundColor="transparent"
            paddingLeft="15"
          />
        </View>
      }</>)
  }


  _renderShipmentBuyerWiseGraph = () => {
    return (<>

      <PoppinsBold style={{ fontSize: 5 * vw }}>Shipment Buyer Wise</PoppinsBold>
      <View style={styles.firstContainer}>

        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', paddingVertical: 2 * vh, alignItems: 'center' }}>

          <TouchableOpacity
            onPress={() => this.onSelectComapny('buyer')}

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
            onPress={() => this.onSelectYear('buyer')}
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
            onPress={() => this.onSelectComapny('country')}

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
            onPress={() => this.onSelectYear('country')}
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


  _renderInformation = () => {
    return (<View style={{ width: 90 * vw, height: 90 * vh, justifyContent: 'space-around', alignItems: 'center' }}>
      {/* <PoppinsRegular
        style={{
          fontSize: 4 * vw,
          color: '#122675', textShadowColor: 'rgba(0, 0, 0, 0.75)',
          textShadowOffset: { width: -1, height: 1 },
          textShadowRadius: 5
        }}
      >Last Shipped : U-7556,06 - 11 -2021 , NARINA, EURO 72, 483.79, MADEUPS</PoppinsRegular>

      <PoppinsRegular
        style={{
          fontSize: 4 * vw,
          color: '#008222', textShadowColor: 'rgba(0, 0, 0, 0.75)',
          textShadowOffset: { width: -1, height: 1 },
          textShadowRadius: 5,

        }}
      >{`Last Shipped : U-7556,06 - 11 -2021 , NARINA, EURO 72, 483.79, MADEUPS`}</PoppinsRegular> */}
      <FlatList
      showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}
        scrollEnabled={false}
        // columnWrapperStyle={{flex:1,justifyContent: "space-around"}}
        columnWrapperStyle={{ justifyContent: 'space-between', }}
        data={this.props.order_summary}
        keyExtractor={item => item.itemId}
        horizontal={false}
        numColumns={3}
        renderItem={this._renderItem}
      />
    </View>)
  }
  _renderAdmin = () => {
    return (<View>
      {this._renderInformation()}
      {this._renderFirstGraph()}
      {this._renderThirdGraph()}
      {this._renderFourthGraph()}
      {this._renderPieceGoodsOrdersGraph()}
      {this._renderShipmentBuyerWiseGraph()}
      {this._renderShipmentCountryWiseGraph()}
      {this._renderGreyFabricSupplierWise()}
      {this._renderSecondGraph()}

    </View>)
  }
  _renderUsers = () => {
    return (<View>
      {this._renderInformation()}



      {this._renderThirdGraph()}
      {this._renderFourthGraph()}

    </View>)



  }
  render() {
    return (
      <View style={{ flex: 1 }}>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ alignItems: 'center', paddingBottom: 10 * vh }}
          style={styles.container}
        >

          <YearGraphDataPopup
            ref={(r) => (this.dataShow = r)} //reference daal rha hai
          />

          {this.props.apcontrol == 1 ? this._renderAdmin() : this._renderUsers()}


        </ScrollView>
        <DropDown ref={(e) => (this.CompanyDropDown = e)} />
      </View>
    );
  }
}




const mapStateToProps = (state) => {
  console.log('state.GeneralReducer.order_summary', state.GeneralReducer.order_summary)
  return {

    order_summary: state.GeneralReducer.order_summary,
    table_card_data_supplier_wise: state.GeneralReducer.table_card_data_supplier_wise,

    monthly_card_data: state.GeneralReducer.monthly_card_data,
    shipment_buyer_wise_Lists: state.GeneralReducer.shipment_buyer_wise_Lists,

    booked_piecegoods_orders_list: state.GeneralReducer.booked_piecegoods_orders_list,


    shipment_country_wise_Lists: state.GeneralReducer.shipment_country_wise_Lists,
    shipment_country_wise_Data: state.GeneralReducer.shipment_country_wise_Data,

    shipment_buyer_wise_Data: state.GeneralReducer.shipment_buyer_wise_Data,
    table_card_data: state.GeneralReducer.table_card_data,
    made_up_graph_data: state.GeneralReducer.made_up_graph_data,
    gray_fabrics_graph_data: state.GeneralReducer.gray_fabrics_graph_data,
    apcontrol: state.GeneralReducer.apcontrol,

  };
};


const mapDispatchToProps = (dispatch) => {
  return {

    getHomepageInformation: (success, error) =>
      dispatch(actions.getHomepageInformation(success, error)),



    getMonthYearGraphData: (success, error) =>
      dispatch(actions.getMonthYearGraphData(success, error)),

    getTableGraphData: (success, error) =>
      dispatch(actions.getTableGraphData(success, error)),

    //getting data for the table : Grey Fabric Supplier Wise
    getTableGreyGabricSupplierWise: (success, error) =>
      dispatch(actions.getTableGreyGabricSupplierWise(success, error)),

    getMadeUpChart: (success, error) =>
      dispatch(actions.getMadeUpChart(success, error)),

    getGrayFabrics: (success, error) =>
      dispatch(actions.getGrayFabrics(success, error)),

    //getting all data for shipment buyer wise for search filters
    getShipmentBuyerWise: (success, error) =>
      dispatch(actions.getShipmentBuyerWise(success, error)),






    getBookedPieceGoodsOrders: (success, error) =>
      dispatch(actions.getBookedPieceGoodsOrders(success, error)),


    //gettingAll Data for country wise shipment
    getShipmentCountryWise: (success, error) =>
      dispatch(actions.getShipmentCountryWise(success, error)),

    getSearchedShipmentCountryWise: (success, error, name, year) =>
      dispatch(actions.getSearchedShipmentCountryWise(success, error, name, year)),

    //getting specific data according to the passed params
    getSearchedShipmentBuyerWise: (success, error, name, year) =>
      dispatch(actions.getSearchedShipmentBuyerWise(success, error, name, year)),


  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AboutUsScreen);
