import React from 'react';
import {Image, View} from 'react-native';
import ThemeColors from '../../../Utils/ThemeColors';
import {vh, vw} from '../../../Utils/Units';
import TouchableHOC from '../../Buttons/TouchableHOC';
import CircularBold from '../../Text/CircularBold';
import PoppinsRegular from '../../Text/PoppinsRegular';


const EmployeeCards = (props) => {
  console.log('gettingggg props',props);
  return (
    <View
      style={{
        width: 92 * vw,
        elevation: 10,
        // flexDirection: 'row',
        alignItems: 'center',
        padding: 3 * vw,
        backgroundColor: 'white',
marginHorizontal:4*vw,
marginTop:2*vh,
        marginBottom: 2 * vh,
        borderRadius: 2 * vw,
        shadowColor: '#000',
        shadowOffset: {
          width: 5,
          height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 15,
      }}
      onPress={() => props.onSuccess()}>
      <Image
      resizeMode='cover'
        style={{height: 11 * vw, width: 11 * vw, borderRadius: 6 * vw}}
        source={{uri: props.employee?.item.image}}
      />
      <View style={{marginTop:2*vh,marginLeft: 3 * vw, width: 70 * vw,justifyContent:'center',alignItems:'center'}}>
        <CircularBold
          style={{
            color: ThemeColors.primary,
            fontSize: 3 * vw,
            marginBottom: 0.5 * vh,
          }}
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
