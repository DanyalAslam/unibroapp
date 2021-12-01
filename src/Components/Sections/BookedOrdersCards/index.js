import React from 'react';
import {Image, View,TouchableOpacity} from 'react-native';
import ThemeColors from '../../../Utils/ThemeColors';
import {vh, vw} from '../../../Utils/Units';
import TouchableHOC from '../../Buttons/TouchableHOC';
import CircularBold from '../../Text/CircularBold';
import PoppinsRegular from '../../Text/PoppinsRegular';
import styles from './styles'

const BookedOrdersCards = (props) => {
  console.log('BookedOrdersCards1233',props)
  return (
    <View
      style={styles.container}
      onPress={() => props.onSuccess()}>
 
      <View style={styles.container2}>
        <View style={{flexDirection:'row'}}>
        <PoppinsRegular
          numberOfLines={2}
          style={styles.heading}>
    Contract no :
        </PoppinsRegular>

        <PoppinsRegular
          style={styles.circularBoardStyle}
          numberOfLines={1}>
         {props.stock.item.contractno}
        </PoppinsRegular>
        </View>
      
        <View style={{flexDirection:'row'}}>
        <PoppinsRegular
          numberOfLines={2}
          style={styles.heading}>
    Booking Date :
        </PoppinsRegular>

        <PoppinsRegular
          style={styles.circularBoardStyle}
          numberOfLines={2}>
         {props.stock.item.bookingdate}
        </PoppinsRegular>
        </View>
    

        <View style={{flexDirection:'row'}}>
        <PoppinsRegular
          numberOfLines={2}
          style={styles.heading}>
    Buyer :
        </PoppinsRegular>

        <PoppinsRegular
          style={styles.circularBoardStyle}
          numberOfLines={1}>
         {props.stock.item.buyer}
        </PoppinsRegular>
        </View>



            

        <View style={{flexDirection:'row'}}>
        <PoppinsRegular
          numberOfLines={2}
          style={styles.heading}>
    Article :
        </PoppinsRegular>

        <PoppinsRegular
          style={styles.circularBoardStyleExtended}
          numberOfLines={3}>
         {props.stock.item.article}
        </PoppinsRegular>
        </View>



        <TouchableOpacity
          onPress={() => props.onSuccess(props.stock.item.contractno)}
        >
          <Image
            style={{ width: 4 * vw, height: 3 * vh, marginRight: 4 * vw }}
            source={{ uri: props.stock.item.View }}
            resizeMode='contain'
          />
        </TouchableOpacity>

      </View>
      
      <View style={styles.container3}>
        <View style={{flexDirection:'row'}}>
        <PoppinsRegular
          numberOfLines={3}
          style={styles.heading}>
    Quality :
        </PoppinsRegular>

        <PoppinsRegular
          style={styles.circularBoardStyleExtended}
          numberOfLines={4}>
         {props.stock.item.quality}
        </PoppinsRegular>
        </View>
      
        <View style={{flexDirection:'row'}}>
        <PoppinsRegular
          numberOfLines={2}
          style={styles.heading}>
    Quantity :
        </PoppinsRegular>

        <PoppinsRegular
          style={styles.circularBoardStyle}
          numberOfLines={2}>
         {props.stock.item.qunatity}
        </PoppinsRegular>
        </View>


        <View style={{flexDirection:'row'}}>
        <PoppinsRegular
          numberOfLines={2}
          style={styles.heading}>
    Fcy Value :
        </PoppinsRegular>

        <PoppinsRegular
          style={styles.circularBoardStyle}
          numberOfLines={1}>
         {props.stock.item.fcy}
        </PoppinsRegular>
        </View>


        <View style={{flexDirection:'row'}}>
        <PoppinsRegular
          numberOfLines={2}
          style={styles.heading}>
    Shipment Date :
        </PoppinsRegular>

        <PoppinsRegular
          style={styles.circularBoardStyleExtended}
          numberOfLines={2}>
         {props.stock.item.shipment}
        </PoppinsRegular>
        </View>

    
{/* 
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
        </View> */}



      </View>
    
    
    
    </View>
  );
};
export default BookedOrdersCards;
