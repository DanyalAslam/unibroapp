import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import MenuScreen from '../Screens/MenuScreen';
import EmployeeEmails from '../Screens/EmployeeEmails'
import StockInHand from '../Screens/StockInHand'
import {getNavigationOptions} from './NavigationOptions';
import Grey from '../Screens/Grey';
import PurchasingOrders from '../Screens/PurchasingOrders'
import OutstandingPurchasingOrders from '../Screens/OutstandingPurchasingOrders'
import DailyProduction from '../Screens/DailyProduction';
import InspectionReport from '../Screens/InspectionReport';
import ProductionSummary from '../Screens/ProductionSummary'
import InspectionSummary from '../Screens/InspectionSummary'
import BookedOrders from '../Screens/BookedOrders'
import BuyersWiseExport from '../Screens/BuyersWiseExport'
import CountryWiseExport from '../Screens/CountryWiseExport'
import ViewReports from '../Screens/ViewReports'
const MenuNavigator = createStackNavigator();
const Payment = createStackNavigator();



const MenuStack = () => {
  return (
    <MenuNavigator.Navigator screenOptions={getNavigationOptions}>
      <MenuNavigator.Screen component={MenuScreen} name="MenuScreen" />
      <MenuNavigator.Screen component={EmployeeEmails} name="EmployeeEmails" />
      <MenuNavigator.Screen component={StockInHand} name="StockInHand" />
      <MenuNavigator.Screen component={Grey} name="Grey" />
      <MenuNavigator.Screen component={PurchasingOrders} name="PurchasingOrders" />
      
      <MenuNavigator.Screen component={ViewReports} name="ViewReports"  />
      <MenuNavigator.Screen component={OutstandingPurchasingOrders} name="OutstandingPurchasingOrders"  />

      <MenuNavigator.Screen component={DailyProduction} name="DailyProduction"  />
      <MenuNavigator.Screen component={InspectionReport} name="InspectionReport"  />
      <MenuNavigator.Screen component={InspectionSummary} name="InspectionSummary"  />
      <MenuNavigator.Screen component={ProductionSummary} name="ProductionSummary"  />


      <MenuNavigator.Screen component={BookedOrders} name="BookedOrders"  />
      <MenuNavigator.Screen component={BuyersWiseExport} name="BuyersWiseExport"  />
      <MenuNavigator.Screen component={CountryWiseExport} name="CountryWiseExport"  />
  
  

    </MenuNavigator.Navigator>
  );
};
export default MenuStack;
