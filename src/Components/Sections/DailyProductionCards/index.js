import React from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import ThemeColors from '../../../Utils/ThemeColors';
import { vh, vw } from '../../../Utils/Units';
import TouchableHOC from '../../Buttons/TouchableHOC';
import CircularBold from '../../Text/CircularBold';
import PoppinsRegular from '../../Text/PoppinsRegular';
import styles from './styles'

const DailyProductionCards = (props) => {
  console.log('DailyProductionCards1233', props)
  return (
    <View
      style={styles.container}
      onPress={() => props.onSuccess()}>

      <View style={styles.container2}>
        <View style={{ flexDirection: 'row' }}>
          <PoppinsRegular
            numberOfLines={2}
            style={styles.heading}>
            DPR No :
          </PoppinsRegular>

          <PoppinsRegular
            style={{
              color: ThemeColors.primary,
              fontSize: 3 * vw,
              fontWeight: 'bold',
              marginBottom: 0.5 * vh,
              marginLeft: 1 * vw,
              width: 40 * vw
            }}
            numberOfLines={1}>
            {props.stock.item.dprno}
          </PoppinsRegular>
        </View>




        <View style={{ flexDirection: 'row' }}>
          <PoppinsRegular
            numberOfLines={2}
            style={styles.heading}>
            DPR Date :
          </PoppinsRegular>

          <PoppinsRegular
            style={styles.circularBoardStyle}
            numberOfLines={1}>
            {props.stock.item.date}
          </PoppinsRegular>
        </View>





        <View style={{ flexDirection: 'row' }}>
          <PoppinsRegular
            numberOfLines={2}
            style={styles.heading}>
            Remarks :
          </PoppinsRegular>

          <PoppinsRegular
            style={styles.circularBoardStyle}
            numberOfLines={3}>
            {props.stock.item.remarks}
          </PoppinsRegular>
        </View>

        <TouchableOpacity
          onPress={() => props.onSuccess(props.stock.item.dprno)}
        >
          <Image
            style={{ width: 4 * vw, height: 3 * vh, marginRight: 4 * vw }}
            source={{ uri: props.stock.item.view }}
            resizeMode='contain'
          />
        </TouchableOpacity>

      </View>
      <View style={styles.container3}>
        <View style={{ flexDirection: 'row' }}>
          <PoppinsRegular
            numberOfLines={2}
            style={styles.heading}>
            Total Pack :
          </PoppinsRegular>

          <PoppinsRegular
            style={styles.circularBoardStyle}
            numberOfLines={1}>
            {props.stock.item.tpack + ' SETS'}
          </PoppinsRegular>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <PoppinsRegular
            numberOfLines={2}
            style={styles.heading}>
            DPR status :
          </PoppinsRegular>

          <PoppinsRegular
            style={{
              color: 'green',
              fontWeight: 'bold',
              fontSize: 2 * vw,
              marginBottom: 0.5 * vh,
              marginLeft: 1 * vw,
              width: 40 * vw
            }}
            numberOfLines={1}>
            {props.stock.item.status}
          </PoppinsRegular>
        </View>



      </View>



    </View>
  );
};
export default DailyProductionCards;
