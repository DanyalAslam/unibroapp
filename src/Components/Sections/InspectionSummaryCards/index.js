import React from 'react';
import {Image, View} from 'react-native';
import ThemeColors from '../../../Utils/ThemeColors';
import {vh, vw} from '../../../Utils/Units';
import TouchableHOC from '../../Buttons/TouchableHOC';
import CircularBold from '../../Text/CircularBold';
import PoppinsRegular from '../../Text/PoppinsRegular';
import styles from './styles'

const InspectionSummaryCards = (props) => {
  console.log('InspectionSummaryCards1233',props)
  return (
    <View
      style={styles.container}
      onPress={() => props.onSuccess()}>
 
      <View style={styles.container2}>
        <View style={{flexDirection:'row'}}>
        <PoppinsRegular
          numberOfLines={2}
          style={styles.heading}>
    Insp Date :
        </PoppinsRegular>

        <PoppinsRegular
          style={styles.circularBoardStyle}
          numberOfLines={1}>
         {props.stock.item.inspdate}
        </PoppinsRegular>
        </View>
      
        <View style={{flexDirection:'row'}}>
        <PoppinsRegular
          numberOfLines={2}
          style={styles.heading}>
    Defects :
        </PoppinsRegular>

        <PoppinsRegular
          style={styles.circularBoardStyle}
          numberOfLines={2}>
         {props.stock.item.defects}
        </PoppinsRegular>
        </View>
    

        



            

    


      </View>
      <View style={styles.container3}>
        <View style={{flexDirection:'row'}}>
        <PoppinsRegular
          numberOfLines={2}
          style={styles.heading}>
   Major :
        </PoppinsRegular>

        <PoppinsRegular
          style={styles.circularBoardStyle}
          numberOfLines={1}>
         {props.stock.item.major}
        </PoppinsRegular>
        </View>
      
        <View style={{flexDirection:'row'}}>
        <PoppinsRegular
          numberOfLines={2}
          style={styles.heading}>
    Minor :
        </PoppinsRegular>

        <PoppinsRegular
          style={styles.circularBoardStyle}
          numberOfLines={1}>
         {props.stock.item.minor}
        </PoppinsRegular>
        </View>

    




      </View>
    
    
    
    </View>
  );
};
export default InspectionSummaryCards;
