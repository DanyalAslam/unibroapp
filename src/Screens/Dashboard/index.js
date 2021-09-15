import React from 'react';
import { View, Text, ToastAndroid, Platform, ScrollView,Image } from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';
import actions from './../../redux/actions/index';
import { LineChart, PieChart,BarChart } from 'react-native-chart-kit'
import { vh, vw } from '../../Utils/Units';
import PoppinsRegular from '../../Components/Text/PoppinsRegular'
import PoppinsBold from '../../Components/Text/PoppinsBold'
import YearGraphDataPopup from '../../Components/Popups/YearGraphDataPopup'
import { TouchableOpacity } from 'react-native-gesture-handler';
import MainInput from '../../Components/Input/MainInput';
import {icons} from '../../assets/images'
import DropDown from '../../Components/DropDown'
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
class AboutUsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
    };
  }


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
    this._getMonthYearGraphData(),
    this._getShipmentBuyerWise()
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

  onSelectComapny = () =>{

    this.CompanyDropDown.show('titlee',
    [{title:'1'},{title:'2'}],
    'bloddd',
    (data) =>{},null,null
    
    )

  }


  _renderFirstGraph = () => {
    return (<><PoppinsBold style={{ fontSize: 5 * vw }}>Month Year Wise Shipment</PoppinsBold>
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

  _renderSecondGraph = () => {
    return (<><PoppinsBold style={{ fontSize: 5 * vw }}>Table Graph</PoppinsBold>

      <View style={styles.secondContainer}>
        {this.props.table_card_data?.length === 0 ? null : this.props.table_card_data.map((datum, index) => { // This will render a row for each data element.
          return this.renderRow(datum, index);
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
    return (<><PoppinsBold style={{ fontSize: 5 * vw }}>Gray Fabrics</PoppinsBold>
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


  _renderShipmentWiseGraph = () => {
    return (<><PoppinsBold style={{ fontSize: 5 * vw }}>Month Year Wise Shipment</PoppinsBold>
 <View style={styles.firstContainer}>

<View style={{flexDirection:'row',justifyContent:'space-evenly',paddingVertical:2*vh,alignItems:'center'}}>

<TouchableOpacity
onPress={this.onSelectComapny}

>
<MainInput
 label="Enter Blood Group"
 required
 placeholder="Select Company"
 editable={false}
 style={{width:30*vw,paddingHorizontal:1*vw}}
 fieldStyle ={{width:20*vw,fontSize:2*vw}}
 rightIcon={icons.downArrow}
/>

</TouchableOpacity>

<TouchableOpacity>
<MainInput
 label="Enter Blood Group"
 required
 placeholder="Select year"
 editable={false}
 style={{width:30*vw,paddingHorizontal:1*vw}}
 fieldStyle ={{width:20*vw,fontSize:2*vw}}
 rightIcon={icons.downArrow}
/>

</TouchableOpacity>

<TouchableOpacity>
<Image 
source={icons.searchBlue}
style={{height:4*vh,width:4*vw}}
resizeMode="contain"
/>

</TouchableOpacity>

</View>


        {this.props?.shipment_buyer_wise?.length === 0 ? null : <BarChart
       
        
          data={this?.props?.shipment_buyer_wise}
          width={100 * vw}
          height={40 * vh}
          chartConfig={{
            barPercentage: .2,
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
      </View></>)
  }


  render() {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ alignItems: 'center', paddingBottom: 10 * vh }}
        style={styles.container}
      >
        <DropDown  ref={(e) =>(this.CompanyDropDown = e)}/>
        <YearGraphDataPopup
          ref={(r) => (this.dataShow = r)} //reference daal rha hai
        />
        {this._renderFirstGraph()}
        {this._renderShipmentWiseGraph()}
        {this._renderSecondGraph()}
        {this._renderThirdGraph()}
        {this._renderFourthGraph()}
      </ScrollView>
    );
  }
}




const mapStateToProps = (state) => {

  return {
    monthly_card_data: state.GeneralReducer.monthly_card_data,
    shipment_buyer_wise: state.GeneralReducer.shipment_buyer_wise,
    table_card_data: state.GeneralReducer.table_card_data,
    made_up_graph_data: state.GeneralReducer.made_up_graph_data,
    gray_fabrics_graph_data: state.GeneralReducer.gray_fabrics_graph_data,

  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    getMonthYearGraphData: (success, error) =>
      dispatch(actions.getMonthYearGraphData(success, error)),

    getTableGraphData: (success, error) =>
      dispatch(actions.getTableGraphData(success, error)),

    getMadeUpChart: (success, error) =>
      dispatch(actions.getMadeUpChart(success, error)),

    getGrayFabrics: (success, error) =>
      dispatch(actions.getGrayFabrics(success, error)),

      getShipmentBuyerWise: (success, error) =>
      dispatch(actions.getShipmentBuyerWise(success, error)),

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AboutUsScreen);
