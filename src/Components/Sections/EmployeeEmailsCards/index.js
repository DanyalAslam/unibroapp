import React from 'react';
import {Image, View} from 'react-native';
import ThemeColors from '../../../Utils/ThemeColors';
import {vh, vw} from '../../../Utils/Units';
import TouchableHOC from '../../Buttons/TouchableHOC';
import CircularBold from '../../Text/CircularBold';
import PoppinsRegular from '../../Text/PoppinsRegular';
import styles from './styles'

const EmployeeEmailsCards = (props) => {
  console.log('gettingggg props',props);
  return (
    <View
      style={styles.container}
      onPress={() => props.onSuccess()}
      
      >
    
      <View style={styles.container2}>
        <CircularBold
          style={styles.circularBoardStyle}
          numberOfLines={1}>
          {props.employee.item.name}
        </CircularBold>
        <PoppinsRegular
          numberOfLines={2}
          style={{color: ThemeColors.fontDarkGrey, fontSize: 3 * vw}}>
          {props.employee.item.depart}
        </PoppinsRegular>

        <PoppinsRegular
          style={{color: ThemeColors.fontLightGrey, fontSize: 2.5 * vw}}>
            {props.employee.item.email}
        </PoppinsRegular>
        {/* 
        <PoppinsRegular
          style={{color: ThemeColors.fontLightGrey, fontSize: 1.3 * vh}}>
          {props.employee.item.created_at}
        </PoppinsRegular> */}
      </View>
    </View>
  );
};
export default EmployeeEmailsCards;
