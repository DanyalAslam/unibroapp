import React from 'react';
import { Image, View } from 'react-native';
import ThemeColors from '../../../Utils/ThemeColors';
import { vh, vw } from '../../../Utils/Units';
import TouchableHOC from '../../Buttons/TouchableHOC';
import CircularBold from '../../Text/CircularBold';
import PoppinsRegular from '../../Text/PoppinsRegular';
import styles from './styles'
import {TouchableOpacity} from 'react-native-gesture-handler'
const InspectionReportCards = (props) => {
  console.log('InspectionReportCards1233', props)
  return (
    <View
      style={styles.container}
    
      >

      <View style={styles.container2}>
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

        <View style={{ flexDirection: 'row' }}>
          <PoppinsRegular
            numberOfLines={2}
            style={styles.heading}>
            Insp No :
          </PoppinsRegular>

          <PoppinsRegular
            style={styles.circularBoardStyle}
            numberOfLines={2}>
            {props.stock.item.inspno}
          </PoppinsRegular>
        </View>


        <View style={{ flexDirection: 'row' }}>
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


        {/* <View style={{flexDirection:'row'}}>
        <PoppinsRegular
          numberOfLines={2}
          style={styles.heading}>
    Description :
        </PoppinsRegular>

        <PoppinsRegular
          style={styles.circularBoardStyle}
          numberOfLines={2}>
         {props.stock.item.description}
        </PoppinsRegular>
        </View> */}
        <TouchableOpacity
       onPress={() => props.onSuccess()}
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
            Insp Date :
          </PoppinsRegular>

          <PoppinsRegular
            style={styles.circularBoardStyle}
            numberOfLines={2}>
            {props.stock.item.inspdate
            }
          </PoppinsRegular>
        </View>



        <View style={{ flexDirection: 'row' }}>
          <PoppinsRegular
            numberOfLines={2}
            style={styles.heading}>
            Insp Type :
          </PoppinsRegular>

          <PoppinsRegular
            style={styles.circularBoardStyle}
            numberOfLines={1}>
            {props.stock.item.insptype}
          </PoppinsRegular>
        </View>


        <View style={{ flexDirection: 'row' }}>
          <PoppinsRegular
            numberOfLines={2}
            style={styles.heading}>
            Shipment Date:
          </PoppinsRegular>

          <PoppinsRegular
            style={styles.circularBoardStyle}
            numberOfLines={1}>
            {props.stock.item.shipmentdate}
          </PoppinsRegular>
        </View>



      </View>



    </View>
  );
};

export default InspectionReportCards;
