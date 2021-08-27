import React from 'react';
import {View,Text,ToastAndroid,Platform, ScrollView} from 'react-native';
import styles from './styles';
import {connect} from 'react-redux';
import actions from './../../redux/actions/index';
import {LineChart,PieChart} from 'react-native-chart-kit'
import { vh, vw } from '../../Utils/Units';

// import PoppinsSemiBold from '../../Components/Text/PoppinsSemiBold';
// import PoppinsLight from '../../Components/Text/PoppinsLight';
import PoppinsRegular from '../../Components/Text/PoppinsRegular'
import PoppinsBold from '../../Components/Text/PoppinsBold'

const chartConfig = {
  backgroundGradientFrom: "#fff",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#fff",
  backgroundGradientToOpacity: 0.5,
  decimalPlaces: 2,
  color: (opacity = 1) => `rgba(0, 128, 0, ${opacity})`,
  labelColor:(opacity = 0)=> `rgba(0, 0, 0, ${opacity})`,
  style: {
    borderRadius: 16,
  },
  propsForBackgroundLines: {
    strokeWidth: 0
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

  _getMonthYearGraphData = () =>{
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
  _getTableGraphData = () =>{
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

  _getMadeUpChart = () =>{
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


  _getGrayFabrics = () =>{
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
   this._getTableGraphData(),
   this._getMadeUpChart(),
   this._getGrayFabrics()
  };

  componentDidMount() {
    this.props.navigation.addListener('focus', this._getHomeData);
  }



   renderRow = (data,index) => {
    console.log('getttting dataaa',data)
    console.log('index',index)

    if(index === 0 )
    {
      return (  <View style={{backgroundColor:'#fff',flex:1,height:10*vh,alignSelf:'stretch',flexDirection:'row',marginHorizontal:5}}>

<View style={{ flex: 1, alignSelf: 'stretch',justifyContent:'center',alignItems:'center' }} >
              <Text style={{color:'#012c65',fontWeight:'bold'}}>Quantity</Text>
              </View>
              
             
            <View style={{ flex: 1, alignSelf: 'stretch',justifyContent:'center',alignItems:'center' }} >
            <Text style={{color:'#012c65',fontWeight:'bold'}}>Value</Text>
            </View>
            <View style={{ flex: 1, alignSelf: 'stretch',justifyContent:'center',alignItems:'center'}} >
            <Text style={{color:'#012c65',fontWeight:'bold'}}>Amount</Text>
            </View>
      </View>  
    );

    }
    else
    {
      return ( 
        <View style={{ flex:1, alignSelf: 'stretch', flexDirection: 'row',borderBottomColor:'black',borderBottomWidth:0.3,height:50,backgroundColor:'#fff',marginHorizontal:5 }}>
            <View style={{ flex: 1,justifyContent:'center',alignItems:'center',paddingLeft:7 }} >
              <PoppinsRegular style={{fontSize:2*vw}}>{data[0]}</PoppinsRegular>
              </View>
            <View style={{ flex: 1, alignSelf: 'stretch',justifyContent:'center',alignItems:'center' }} >
            <PoppinsRegular style={{fontSize:2*vw}}>{data[1]}</PoppinsRegular>
            </View>
            <View style={{ flex: 1, alignSelf: 'stretch',justifyContent:'center',alignItems:'center' }} >
            <PoppinsRegular style={{fontSize:2*vw}}>{data[2]}</PoppinsRegular>
            </View>
           
      
        </View>
    );

    }
   
}


  render() {
    
    console.log('this?.props?.monthly_card_data',this.props.monthly_card_data)

    return (
      <ScrollView 

      showsVerticalScrollIndicator={false}
      contentContainerStyle={{alignItems:'center',paddingBottom:10*vh}}
      style={styles.container}
    
      >
        {/* <PoppinsSemiBold style={styles.title}>Our History</PoppinsSemiBold>
        <PoppinsLight style={styles.desc}>{about}</PoppinsLight> */}

   
        <PoppinsBold style={{fontSize:5*vw}}>Month Year Wise Shipment</PoppinsBold>
<View style={{backgroundColor:'white',width:92*vw,elevation:3*vw,marginVertical:3*vh}}>
{this.props.monthly_card_data.length === 0 ? null :    <LineChart
    onDataPointClick={(value, dataset, getColor) => {  if (Platform.OS === 'android') {
      // ToastAndroid.show(value.value, ToastAndroid.LONG)
      ToastAndroid.showWithGravity(
        value.value,
        ToastAndroid.LONG,
        ToastAndroid.TOP,
      
      );
    } else {
      AlertIOS.alert(msg);
    }} 
    
    }
    // getDotProps = {(value, index) =>console.log('dotProperties',value)}
          data={this?.props?.monthly_card_data}
          width={90*vw}
          height={40*vh}
          chartConfig={chartConfig}
          withVerticalLabels={false}
          style={{
                  marginVertical: 8,
                  borderRadius: 16,
                  marginHorizontal:4,
                 }}
                //  onDataPointClick={(params) => {console.log({params});}} 
    /> }
</View>




   
<PoppinsBold style={{fontSize:5*vw}}>Table Graph</PoppinsBold>

<View style={{backgroundColor:'white',paddingBottom:5*vh,width:92*vw,elevation:3*vw,marginVertical:3*vh}}>


{ this.props.table_card_data?.length === 0 ? null :   this.props.table_card_data.map((datum,index) => { // This will render a row for each data element.
            return this.renderRow(datum,index);
        })
      
    }
</View>

<PoppinsBold style={{fontSize:5*vw}}>Made up graphs</PoppinsBold>

{this.props.made_up_graph_data.length === 0 ? null :
  <View style={{backgroundColor:'white',width:92*vw,elevation:3*vw,marginVertical:3*vh}}>
      
        <PieChart
         
    
          data={this.props.made_up_graph_data}
          width={80*vw}
          height={220}
          chartConfig={chartConfigMadeUp}
          accessor={"population"}
          backgroundColor="transparent"
          paddingLeft="15"
        />
    </View>
}


<PoppinsBold style={{fontSize:5*vw}}>Gray Fabrics</PoppinsBold>


      </ScrollView>
    );
  }
}
const about = 'Lorem ipsum dolor sit amet, consectetur adipis cingelit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.Lorem ipsum dolor sit amet, consectetur adipis cingelit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.';




const mapStateToProps = (state) => {

  console.log('getting sattes in dashboard',state)
  return {
    monthly_card_data: state.GeneralReducer.monthly_card_data,
    table_card_data: state.GeneralReducer.table_card_data,
    made_up_graph_data: state.GeneralReducer.made_up_graph_data,
  
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

    // buyTicket: (Data, success, error) =>
    //   dispatch(actions.buyTicket(Data, success, error)),
    // getSubscription: (success, error) =>
    //   dispatch(actions.getSubscription(success, error)),

    // logOut: (success, error) => dispatch(actions.logOut(success, error)),
    // getNotificationsCount: (success, error) =>
    //   dispatch(actions.getNotificationsCount(success, error)),

    // getSingleStreams: (id, success, error) =>
    //   dispatch(actions.getSingleStreams(id, success, error)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AboutUsScreen);
