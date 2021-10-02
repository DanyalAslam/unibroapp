import React from 'react';
import {Image, View} from 'react-native';
import ThemeColors from '../../../Utils/ThemeColors';
import {vh, vw} from '../../../Utils/Units';
import TouchableHOC from '../../Buttons/TouchableHOC';
import CircularBold from '../../Text/CircularBold';
import PoppinsRegular from '../../Text/PoppinsRegular';
import styles from './styles'

const GreyCards = (props) => {
  console.log('GreyCards1233',props)
  return (
    <View
      style={styles.container}
      onPress={() => props.onSuccess()}>
 
      <View style={styles.container2}>
        <View style={{flexDirection:'row'}}>
        <PoppinsRegular
          numberOfLines={2}
          style={styles.heading}>
    Cont No :
        </PoppinsRegular>

        <PoppinsRegular
          style={styles.circularBoardStyle}
          numberOfLines={1}>
         {props.stock.item.itemcode}
        </PoppinsRegular>
        </View>
      
        <View style={{flexDirection:'row'}}>
        <PoppinsRegular
          numberOfLines={2}
          style={styles.heading}>
    Supplier :
        </PoppinsRegular>

        <PoppinsRegular
          style={styles.circularBoardStyle}
          numberOfLines={2}>
         {props.stock.item.desc}
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
         {props.stock.item.unit}
        </PoppinsRegular>
        </View>

      </View>
      <View style={styles.container3}>
        <View style={{flexDirection:'row'}}>
        <PoppinsRegular
          numberOfLines={2}
          style={styles.heading}>
    Meters :
        </PoppinsRegular>

        <PoppinsRegular
          style={styles.circularBoardStyle}
          numberOfLines={1}>
         {props.stock.item.optq}
        </PoppinsRegular>
        </View>
      
        <View style={{flexDirection:'row'}}>
        <PoppinsRegular
          numberOfLines={2}
          style={styles.heading}>
    Rates (PKR) :
        </PoppinsRegular>

        <PoppinsRegular
          style={styles.circularBoardStyle}
          numberOfLines={1}>
         {props.stock.item.lastrate}
        </PoppinsRegular>
        </View>

    

        <View style={{flexDirection:'row'}}>
        <PoppinsRegular
          numberOfLines={2}
          style={styles.heading}>
    Amount (PKR)
     :
        </PoppinsRegular>

        <PoppinsRegular
          style={styles.circularBoardStyle}
          numberOfLines={1}>
         {props.stock.item.opnamt}
        </PoppinsRegular>
        </View>

      </View>
    </View>
  );
};
export default GreyCards;
