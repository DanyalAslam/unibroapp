import React from 'react';
import { View, Text, ToastAndroid, Platform, ScrollView } from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';
import actions from './../../redux/actions/index';
import { LineChart, PieChart } from 'react-native-chart-kit'
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
  labelColor: (opacity = 0) => `rgba(0, 0, 0, ${opacity})`,
  style: {
    borderRadius: 16,
  },
  propsForBackgroundLines: {
    strokeWidth: 0
  }
};

const data = [
  {
    name: "Seoul",
    population: 21500000,
    color: "rgba(131, 167, 234, 1)",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  },
  {
    name: "Toronto",
    population: 2800000,
    color: "#F00",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  },
  {
    name: "Beijing",
    population: 527612,
    color: "red",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  },
  {
    name: "New York",
    population: 8538000,
    color: "#ffffff",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  },
  {
    name: "Moscow",
    population: 11920000,
    color: "rgb(0, 0, 255)",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  }
];


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
            <PoppinsRegular style={{ fontSize: 2 * vw }}>{data[0]}</PoppinsRegular>
          </View>
          <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }} >
            <PoppinsRegular style={{ fontSize: 2 * vw }}>{data[1]}</PoppinsRegular>
          </View>
          <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }} >
            <PoppinsRegular style={{ fontSize: 2 * vw }}>{data[2]}</PoppinsRegular>
          </View>


        </View>
      );

    }

  }


  _renderFirstGraph = () => {
    return (<><PoppinsBold style={{ fontSize: 5 * vw }}>Month Year Wise Shipment</PoppinsBold>
      <View style={styles.firstContainer}>
        {this.props.monthly_card_data.length === 0 ? null : <LineChart
          onDataPointClick={(value, dataset, getColor) => {
            if (Platform.OS === 'android') {
              ToastAndroid.showWithGravity(
                value.value,
                ToastAndroid.LONG,
                ToastAndroid.TOP,
              );
            } else {
              AlertIOS.alert(msg);
            }
          }
          }
          data={this?.props?.monthly_card_data}
          width={90 * vw}
          height={40 * vh}
          chartConfig={chartConfig}
          withVerticalLabels={false}
          style={{
            marginVertical: 8,
            borderRadius: 16,
            marginHorizontal: 4,
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


  render() {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ alignItems: 'center', paddingBottom: 10 * vh }}
        style={styles.container}
      >
        {this._renderFirstGraph()}
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

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AboutUsScreen);
