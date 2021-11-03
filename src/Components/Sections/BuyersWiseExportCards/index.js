import React from 'react';
import {Image, View} from 'react-native';
import ThemeColors from '../../../Utils/ThemeColors';
import {vh, vw} from '../../../Utils/Units';
import TouchableHOC from '../../Buttons/TouchableHOC';
import CircularBold from '../../Text/CircularBold';
import PoppinsRegular from '../../Text/PoppinsRegular';
import styles from './styles'

const BuyersWiseExportCards = (props) => {
  console.log('BuyersWiseExportCards1233',props)
  return (
    <View
      style={styles.container}
      onPress={() => props.onSuccess()}>
 
      <View style={styles.container2}>
        <View style={{flexDirection:'row'}}>
        <PoppinsRegular
          numberOfLines={2}
          style={styles.heading}>
    Invoice No :
        </PoppinsRegular>

        <PoppinsRegular
          style={styles.circularBoardStyle}
          numberOfLines={1}>
         {props.stock.item.invoiceno}
        </PoppinsRegular>
        </View>
      
        <View style={{flexDirection:'row'}}>
        <PoppinsRegular
          numberOfLines={2}
          style={styles.heading}>
    Invoice Date :
        </PoppinsRegular>

        <PoppinsRegular
          style={styles.circularBoardStyle}
          numberOfLines={2}>
         {props.stock.item.invoicedate}
        </PoppinsRegular>
        </View>
    

        <View style={{flexDirection:'row'}}>
        <PoppinsRegular
          numberOfLines={2}
          style={styles.heading}>
    Description :
        </PoppinsRegular>

        <PoppinsRegular
          style={styles.circularBoardStyle}
          numberOfLines={1}>
         {props.stock.item.description}
        </PoppinsRegular>
        </View>

        <View style={{flexDirection:'row'}}>
        <PoppinsRegular
          numberOfLines={2}
          style={styles.heading}>
    Customer :
        </PoppinsRegular>

        <PoppinsRegular
          style={styles.circularBoardStyle}
          numberOfLines={1}>
         {props.stock.item.customer}
        </PoppinsRegular>
        </View>


      </View>
      <View style={styles.container3}>
        <View style={{flexDirection:'row'}}>
        <PoppinsRegular
          numberOfLines={2}
          style={styles.heading}>
    City :
        </PoppinsRegular>

        <PoppinsRegular
          style={styles.circularBoardStyle}
          numberOfLines={1}>
         {props.stock.item.city}
        </PoppinsRegular>
        </View>
      
        <View style={{flexDirection:'row'}}>
        <PoppinsRegular
          numberOfLines={2}
          style={styles.heading}>
    Country :
        </PoppinsRegular>

        <PoppinsRegular
          style={styles.circularBoardStyleExtended}
          numberOfLines={2}>
         {props.stock.item.country}
        </PoppinsRegular>
        </View>

        <View style={{flexDirection:'row'}}>
        <PoppinsRegular
          numberOfLines={2}
          style={styles.heading}>
    Fcy :
        </PoppinsRegular>

        <PoppinsRegular
          style={styles.circularBoardStyle}
          numberOfLines={1}>
         {props.stock.item.fcy}
        </PoppinsRegular>
        </View>



      </View>
    
    
    
    </View>
  );
};
export default BuyersWiseExportCards;
