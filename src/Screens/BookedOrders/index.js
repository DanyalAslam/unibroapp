import React from 'react';
import { FlatList, View, Text } from 'react-native';
import styles from './styles';
import BookedOrdersCards from '../../Components/Sections/BookedOrdersCards';
import { connect } from 'react-redux';
import actions from '../../redux/actions/index';
import { vh,vw } from '../../Utils/Units';
import MainInput from '../../Components/Input/MainInput';


class BookedOrders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
    };
  }

  componentDidMount() {
    this.props.navigation.addListener('focus', this._getBookedOrders);
  }

  componentWillUnmount() {
    this.props.navigation.removeListener('focus');
  }

  _getBookedOrders = () => {
    this.props.getBookedOrders(
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

  _renderBookedOrders = (item) => {

    console.log('gettgtttttt fabricsasad',item)
    return <BookedOrdersCards



      // onSuccess={() =>
      //   this.props.navigation.navigate('WatchStreanScreen', { item })
      // }
      stock={item} 
      
      />;
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
            elevation: 2 * vw,
            marginTop: 2 * vh
          }}>

          <MainInput
            placeholder=" Search Employee Emails"
            style={styles.inputField}
            onChangeText={(keyword) => this.onStateChange('keyword', keyword)}
          />

          {/* <TouchableOpacity onPress={this._search}>
            <Image
              resizeMode="contain"
              style={{ height: 5 * vh, width: 5 * vw }}
              source={icons.searchBlue}
            />
          </TouchableOpacity> */}
        </View>



  <FlatList 
  showsVerticalScrollIndicator={false}
  data={this.props.booked_order}
  renderItem={this._renderBookedOrders}
  contentContainerStyle={{paddingBottom:10*vh}}
  />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('Purchasing orders state12',state)
  return {
    booked_order: state.GeneralReducer.booked_order,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getBookedOrders: (success, error) =>
      dispatch(actions.getBookedOrders(success, error)),
  };
}; 


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BookedOrders);
