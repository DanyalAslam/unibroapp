import React from 'react';
import { Image, View } from 'react-native';
import ThemeColors from '../../../Utils/ThemeColors';
import { vh, vw } from '../../../Utils/Units';
import TouchableHOC from '../../Buttons/TouchableHOC';
import CircularBold from '../../Text/CircularBold';
import PoppinsRegular from '../../Text/PoppinsRegular';
import styles from './styles'

const PurchasingOrdersCards = (props) => {
  console.log('PurchasingOrdersCards1233', props)
  return (
    <View
      style={styles.container}
      onPress={() => props.onSuccess()}>

      <View style={styles.container2}>
        <View style={{ flexDirection: 'row' }}>
          <PoppinsRegular
            numberOfLines={2}
            style={styles.heading}>
            Po_No :
          </PoppinsRegular>

          <PoppinsRegular
            style={styles.circularBoardStyle}
            numberOfLines={1}>
            {props.stock.item.pono}
          </PoppinsRegular>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <PoppinsRegular
            numberOfLines={2}
            style={styles.heading}>
            Ubi_No :
          </PoppinsRegular>

          <PoppinsRegular
            style={styles.circularBoardStyle}
            numberOfLines={2}>
            {props.stock.item.supplier}
          </PoppinsRegular>
        </View>


        <View style={{ flexDirection: 'row' }}>
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





        <View style={{ flexDirection: 'row' }}>
          <PoppinsRegular
            numberOfLines={2}
            style={styles.heading}>
            Supplier :
          </PoppinsRegular>

          <PoppinsRegular
            style={styles.circularBoardStyle}
            numberOfLines={1}>
            {props.stock.item.supplier}
          </PoppinsRegular>
        </View>


      </View>
      <View style={styles.container3}>
        <View style={{ flexDirection: 'row' }}>
          <PoppinsRegular
            numberOfLines={2}
            style={styles.heading}>
            Amount :
          </PoppinsRegular>

          <PoppinsRegular
            style={styles.circularBoardStyle}
            numberOfLines={1}>
            {props.stock.item.amount}
          </PoppinsRegular>
        </View>

        {/* <View style={{flexDirection:'row'}}>
        <PoppinsRegular
          numberOfLines={2}
          style={styles.heading}>
    Approve Date :
        </PoppinsRegular>

        <PoppinsRegular
          style={styles.circularBoardStyle}
          numberOfLines={1}>
         {props.stock.item.rate}
        </PoppinsRegular>
        </View> */}



        <View style={{ flexDirection: 'row' }}>
          <PoppinsRegular
            numberOfLines={2}
            style={styles.heading}>
            Status :
          </PoppinsRegular>

          <PoppinsRegular
            style={styles.circularBoardStyleExtended}
            numberOfLines={2}>
            {props.stock.item.status}
          </PoppinsRegular>
        </View>




      </View>



    </View>
  );
};
export default PurchasingOrdersCards;
