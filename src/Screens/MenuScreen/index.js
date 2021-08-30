import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import {settingIcons} from '../../assets/images';
import MenuButton from '../../Components/Buttons/MenuButton';
// import Logout from '../../Components/Popups/LogoutPopup';
class MenuScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        {/* <Logout
          ref={(ref) => (this.logout = ref)}
          onSuccess={() => this.props.navigation.navigate('LoginScreen')}
        /> */}
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
          title="Gray Fibre"
          // onPress={() => this.props.navigation.navigate('PaymentLogScreen')}
          icon={settingIcons.payment}
        />
        <MenuButton
          title="Garments Purchase Stock"
          // onPress={() => this.props.navigation.navigate('ContactUsScreen')}
          icon={settingIcons.contact}
        />
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
          // onPress={() => this.logout.show()}
          title="Logout"
          icon={settingIcons.logout}
        />
      </View>
    );
  }
}
export default MenuScreen;
