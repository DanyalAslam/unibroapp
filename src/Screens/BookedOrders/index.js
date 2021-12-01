import React from 'react';
import { FlatList, View, ActivityIndicator } from 'react-native';
import styles from './styles';
import BookedOrdersCards from '../../Components/Sections/BookedOrdersCards';
import { connect } from 'react-redux';
import actions from '../../redux/actions/index';
import { vh, vw } from '../../Utils/Units';
import MainInput from '../../Components/Input/MainInput';


class BookedOrders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      keyword:'',
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

  _renderBookedOrders = (item) => {

    console.log('gettgtttttt fabricsasad', item)
    return <BookedOrdersCards



    
    onSuccess={(id) => this.props.navigation.navigate('ViewReports', { id: id, role: 'BOOKEDORDERS' })}

      stock={item}

    />;
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

      const search = await this.props.getBookedOrders(data.keyword, success => { }, error => { });
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



            marginTop: 2 * vh
          }}>

          <MainInput
            placeholder=" Search Booked Orders"
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
          data={this.props.booked_order}
          renderItem={this._renderBookedOrders}
          contentContainerStyle={{ paddingBottom: 10 * vh }}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {

  return {
    activity_loading: state.GeneralReducer.activity_loading,

    booked_order: state.GeneralReducer.booked_order,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getBookedOrders: (keyword,success, error) =>
      dispatch(actions.getBookedOrders(keyword,success, error)),
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BookedOrders);
