import React from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import ThemeColors from '../../../Utils/ThemeColors';
import { vh, vw } from '../../../Utils/Units';
import TouchableHOC from '../../Buttons/TouchableHOC';
import CircularBold from '../../Text/CircularBold';
import PoppinsRegular from '../../Text/PoppinsRegular';
import styles from './styles'

const GreyCards = (props) => {
  console.log('GreyCards1233', props)
  return (
    <View
      style={styles.container}
      onPress={() => props.onSuccess()}>

      <View style={styles.container2}>


        <View style={{ flexDirection: 'row' }}>
          <PoppinsRegular
            numberOfLines={2}
            style={styles.heading}>
            Quality :
          </PoppinsRegular>

          <PoppinsRegular
            style={styles.circularBoardStyle}
            numberOfLines={1}>
            {props.stock.item.quantity}
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
            style={styles.circularBoardStyleExtended}
            numberOfLines={2}>
            {props.stock.item.description}
          </PoppinsRegular>
        </View>





        <View style={{ flexDirection: 'row' }}>
          <PoppinsRegular
            numberOfLines={2}
            style={styles.heading}>
            Remarks :
          </PoppinsRegular>

          <PoppinsRegular
            style={styles.circularBoardStyleExtended}
            numberOfLines={2}>
            {props.stock.item.remarks}
          </PoppinsRegular>
        </View>


      </View>
      <View style={styles.container3}>
        <View style={{ flexDirection: 'row' }}>
          <PoppinsRegular
            numberOfLines={2}
            style={styles.heading}>
            Meters :
          </PoppinsRegular>

          <PoppinsRegular
            style={styles.circularBoardStyle}
            numberOfLines={1}>
            {props.stock.item.meters}
          </PoppinsRegular>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <PoppinsRegular
            numberOfLines={2}
            style={styles.heading}>
            Rates (PKR) :
          </PoppinsRegular>

          <PoppinsRegular
            style={styles.circularBoardStyle}
            numberOfLines={1}>
            {props.stock.item.rate}
          </PoppinsRegular>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <PoppinsRegular
            numberOfLines={2}
            style={styles.heading}>
            Cont No :
          </PoppinsRegular>

          <PoppinsRegular
            style={styles.circularBoardStyle}
            numberOfLines={1}>
            {props.stock.item.contract}
          </PoppinsRegular>
        </View>

        <TouchableOpacity
          onPress={() => props.onSuccess(props.stock.item.inspno)}
        >
          <Image
            style={{ width: 4 * vw, height: 3 * vh, marginRight: 4 * vw }}
            source={{ uri: props.stock.item.View }}
            resizeMode='contain'
          />
        </TouchableOpacity>


      </View>



    </View>
  );
};
export default GreyCards;
