import React from 'react';
import {View,Text,ToastAndroid,Platform} from 'react-native';
import styles from './styles';
import {connect} from 'react-redux';
import actions from './../../redux/actions/index';
import {LineChart} from 'react-native-chart-kit'
import { vh, vw } from '../../Utils/Units';

// import PoppinsSemiBold from '../../Components/Text/PoppinsSemiBold';
// import PoppinsLight from '../../Components/Text/PoppinsLight';

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
class AboutUsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
    };
  }


  _getHomeData = () => {
    // this.setState({
    //   edit: true,
    // });
    this.props.getDahsBoardData(
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
    // this._getSubscriptionData();
  };

  componentDidMount() {
    this.props.navigation.addListener('focus', this._getHomeData);
  }


  render() {
    
    console.log('this?.props?.monthly_card_data',this.props.monthly_card_data)

    return (
      <View style={styles.container}>
        {/* <PoppinsSemiBold style={styles.title}>Our History</PoppinsSemiBold>
        <PoppinsLight style={styles.desc}>{about}</PoppinsLight> */}

        <Text>Hello from Dahboard</Text>

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
    );
  }
}
const about = 'Lorem ipsum dolor sit amet, consectetur adipis cingelit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.Lorem ipsum dolor sit amet, consectetur adipis cingelit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.';




const mapStateToProps = (state) => {

  console.log('getting sattes in dashboard',state)
  return {
    monthly_card_data: state.GeneralReducer.monthly_card_data,
    // access_token: state.GeneralReducer.access_token,
    // mySubscription: state.GeneralReducer.mySubscription,
    // userInfo: state.GeneralReducer.userInfo,
    // notification_count: state.GeneralReducer.notification_counts,
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    getDahsBoardData: (success, error) =>
      dispatch(actions.getDahsBoardData(success, error)),

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
