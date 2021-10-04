import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import {settingIcons} from '../../assets/images';
import MenuButton from '../../Components/Buttons/MenuButton';

import { connect } from 'react-redux';
import actions from './../../redux/actions/index';
import { showToast } from './../../Utils/index';
import { vw } from '../../Utils/Units';
class MenuScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      showGarmentsPurchaseSubmenus:false
    };
  }


  _onLogout = () =>{
    this.props.logOut((success) => {
      showToast("User Logout Successfully")
    

  }, (error) => { 

      showToast(error)
      this.close()
  })

  } 


  render() {
    return (
      <View style={styles.container}>
      
        <MenuButton
          onPress={() => this.props.navigation.navigate('EmployeeEmails')}
          title="Employee Email"
          icon={settingIcons.profile}
        />
        {/* <MenuButton
          title="Employee Profile"
          // onPress={() => this.props.navigation.navigate('StreamsScreen')}
          icon={settingIcons.streams}
        /> */}
        <MenuButton
          title="Stock In Hand"
          icon={settingIcons.subscription}
          onPress={() => this.props.navigation.navigate('StockInHand')}
        />
        <MenuButton
          title="Grey"
          onPress={() => this.props.navigation.navigate('Grey')}
          icon={settingIcons.payment}
        />
        <MenuButton
          title="Garments Purchase Stock"
          // onPress={() => this.props.navigation.navigate('ContactUsScreen')}
          onPress={() =>this.setState({showGarmentsPurchaseSubmenus:!this.state.showGarmentsPurchaseSubmenus})}
          icon={settingIcons.contact}
        />

{this.state.showGarmentsPurchaseSubmenus ?
         <MenuButton
          title="- Purchasing Order"
          style={{marginLeft:5*vw, width: 75 * vw,}}
          onPress={() => this.props.navigation.navigate('PurchasingOrders')}
          icon={settingIcons.contact}
        /> :null }

{this.state.showGarmentsPurchaseSubmenus ?
         <MenuButton
          title="- Outstanding PO"
          style={{marginLeft:5*vw, width: 75 * vw,}}
          onPress={() => this.props.navigation.navigate('OutstandingPurchasingOrders')}
          icon={settingIcons.contact}
        /> :null }




        <MenuButton
          title="Production Stock"
          // onPress={() => this.props.navigation.navigate('AboutUsScreen')}
          icon={settingIcons.about}
        />

<MenuButton
          title="Export Stock"
          // onPress={() => this.props.navigation.navigate('AboutUsScreen')}
          icon={settingIcons.about}
        />
        <MenuButton
          onPress={() => this._onLogout()}
          title="Logout"
          icon={settingIcons.logout}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {

  console.log('State Home:', state);
  return {
      data: state.GeneralReducer.homeData,

  };
};

const mapDispatchToProps = dispatch => {
  return {
      logOut: (success, error) =>
          dispatch(actions.logOut(success, error)),

  };
};


export default connect(mapStateToProps,
  mapDispatchToProps)(MenuScreen)
