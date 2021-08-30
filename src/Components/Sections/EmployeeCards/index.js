import React from 'react';
import {Image, View} from 'react-native';
import ThemeColors from '../../../Utils/ThemeColors';
import {vh, vw} from '../../../Utils/Units';
import TouchableHOC from '../../Buttons/TouchableHOC';
import CircularBold from '../../Text/CircularBold';
import PoppinsRegular from '../../Text/PoppinsRegular';
import styles from './styles'

const EmployeeCards = (props) => {
  console.log('EmployeeCards1233',props)
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
        <View style={{flexDirection:'row'}}>
        <PoppinsRegular
          numberOfLines={2}
          style={styles.heading}>
    User Name :
        </PoppinsRegular>

        <PoppinsRegular
          style={styles.circularBoardStyle}
          numberOfLines={1}>
         {props.employee.item.name}
        </PoppinsRegular>
        </View>
      
        <View style={{flexDirection:'row'}}>
        <PoppinsRegular
          numberOfLines={2}
          style={styles.heading}>
    Department :
        </PoppinsRegular>

        <PoppinsRegular
          style={styles.circularBoardStyle}
          numberOfLines={1}>
         {props.employee.item.depart}
        </PoppinsRegular>
        </View>
    

        <View style={{flexDirection:'row'}}>
        <PoppinsRegular
          numberOfLines={2}
          style={styles.heading}>
    Designation :
        </PoppinsRegular>

        <PoppinsRegular
          style={styles.circularBoardStyle}
          numberOfLines={1}>
         {props.employee.item.designation}
        </PoppinsRegular>
        </View>


        <View style={{flexDirection:'row'}}>
        <PoppinsRegular
          numberOfLines={2}
          style={styles.heading}>
    User Email :
        </PoppinsRegular>

        <PoppinsRegular
          style={styles.circularBoardStyle}
          numberOfLines={1}>
         {props.employee.item.email}
        </PoppinsRegular>
        </View>
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
