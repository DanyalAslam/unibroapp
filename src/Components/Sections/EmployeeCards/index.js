import React from 'react';
import {Image, View} from 'react-native';
import ThemeColors from '../../../Utils/ThemeColors';
import {vh, vw} from '../../../Utils/Units';
import TouchableHOC from '../../Buttons/TouchableHOC';
import CircularBold from '../../Text/CircularBold';
import PoppinsRegular from '../../Text/PoppinsRegular';
import styles from './styles'

const EmployeeCards = (props) => {
  console.log('gettingggg props',props);
  return (
    <View
      style={styles.container}
      onPress={() => props.onSuccess()}>
      <Image
      resizeMode='cover'
        style={styles.imgContainer}
        source={{uri: props.employee?.item.image}}
      />
      <View style={styles.container2}>
        <CircularBold
          style={styles.circularBoardStyle}
          numberOfLines={1}>
          {props.employee.item.name}
        </CircularBold>
        <PoppinsRegular
          numberOfLines={2}
          style={{color: ThemeColors.fontDarkGrey, fontSize: 2.5 * vw}}>
          {props.employee.item.depart}
        </PoppinsRegular>

        <PoppinsRegular
          style={{color: ThemeColors.fontLightGrey, fontSize: 2 * vw}}>
            {props.employee.item.designation}
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
export default EmployeeCards;
