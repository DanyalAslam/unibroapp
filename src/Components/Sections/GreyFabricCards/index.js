import React from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import ThemeColors from '../../../Utils/ThemeColors';
import { vh, vw } from '../../../Utils/Units';
import TouchableHOC from '../../Buttons/TouchableHOC';
import CircularBold from '../../Text/CircularBold';
import PoppinsRegular from '../../Text/PoppinsRegular';
import styles from './styles'



const GreyFabricCards = (props) => {
  console.log('prapppppp',props)

  return (
    <View
      style={styles.container}
      onPress={() => props.onSuccess()}>

      <View style={styles.container2}>


        <View style={{ flexDirection: 'row' }}>
          <PoppinsRegular
            numberOfLines={2}
            style={styles.heading}>
            desc :
          </PoppinsRegular>

          <PoppinsRegular
            style={styles.circularBoardStyle}
            numberOfLines={1}>
            {props.stock.item.desc}
          </PoppinsRegular>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <PoppinsRegular
            numberOfLines={2}
            style={styles.heading}>
            design :
          </PoppinsRegular>

          <PoppinsRegular
            style={styles.circularBoardStyle}
            numberOfLines={2}>
            {props.stock.item.design}
          </PoppinsRegular>
        </View>


        <View style={{ flexDirection: 'row' }}>
          <PoppinsRegular
            numberOfLines={2}
            style={styles.heading}>
            meter :
          </PoppinsRegular>

          <PoppinsRegular
            style={styles.circularBoardStyleExtended}
            numberOfLines={2}>
            {props.stock.item.meter}
          </PoppinsRegular>
        </View>





        <View style={{ flexDirection: 'row' }}>
          <PoppinsRegular
            numberOfLines={2}
            style={styles.heading}>
            ubino :
          </PoppinsRegular>

          <PoppinsRegular
            style={styles.circularBoardStyleExtended}
            numberOfLines={2}>
            {props.stock.item.ubino}
          </PoppinsRegular>
        </View>


      </View>
      <View style={styles.container3}>
     

    
   
    


      </View>



    </View>
  );
};
export default GreyFabricCards;
