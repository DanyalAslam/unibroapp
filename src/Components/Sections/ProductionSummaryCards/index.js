import React from 'react';
import {Image, View,TouchableOpacity} from 'react-native';
import ThemeColors from '../../../Utils/ThemeColors';
import {vh, vw} from '../../../Utils/Units';
import TouchableHOC from '../../Buttons/TouchableHOC';
import CircularBold from '../../Text/CircularBold';
import PoppinsRegular from '../../Text/PoppinsRegular';
import styles from './styles'

const ProductionSummaryCards = (props) => {
  console.log('ProductionSummaryCards1233',props)
  return (
    <View
      style={styles.container}
      onPress={() => props.onSuccess()}>
 
      <View style={styles.container2}>
        <View style={{flexDirection:'row'}}>
        <PoppinsRegular
          numberOfLines={2}
          style={styles.heading}>
    Contract :
        </PoppinsRegular>

        <PoppinsRegular
          style={{ color: ThemeColors.primary,
            fontSize: 3 * vw,
            fontWeight:'bold',
            marginBottom: 0.5 * vh,
            marginLeft:1*vw,
            width:40*vw}}
          numberOfLines={1}>
         {props.stock.item.contract}
        </PoppinsRegular>
        </View>
      
        <View style={{flexDirection:'row'}}>
        <PoppinsRegular
          numberOfLines={2}
          style={styles.heading}>
    Buyer :
        </PoppinsRegular>

        <PoppinsRegular
          style={styles.circularBoardStyle}
          numberOfLines={2}>
         {props.stock.item.buyer}
        </PoppinsRegular>
        </View>
    

        <View style={{flexDirection:'row'}}>
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


        <TouchableOpacity
       onPress={() => props.onSuccess(props?.stock?.item?.contract)}
        >
          <Image
            style={{ width: 4 * vw, height: 3 * vh, marginRight: 4 * vw }}
            source={{ uri: props.stock.item.View }}
            resizeMode='contain'
          />
        </TouchableOpacity>
            

      


      </View>
      <View style={styles.container3}>
        <View style={{flexDirection:'row'}}>
        <PoppinsRegular
          numberOfLines={2}
          style={styles.heading}>
    Order Qty :
        </PoppinsRegular>

        <PoppinsRegular
          style={{

            color: 'green',
            fontSize: 2 * vw,
            marginBottom: 0.5 * vh,
            marginLeft:1*vw,
            width:40*vw



          }}
          numberOfLines={1}>
         {props.stock.item.orderqty}
        </PoppinsRegular>
        </View>
      
        <View style={{flexDirection:'row'}}>
        <PoppinsRegular
          numberOfLines={2}
          style={styles.heading}>
    Packed Qty :
        </PoppinsRegular>

        <PoppinsRegular
          style={{

            color: 'green',
            fontSize: 2 * vw,
            marginBottom: 0.5 * vh,
            marginLeft:1*vw,
            width:40*vw

          }}
          numberOfLines={1}>
         {props.stock.item.packedqty}
        </PoppinsRegular>
        </View>

    
{/* 
        <View style={{flexDirection:'row'}}>
        <PoppinsRegular
          numberOfLines={2}
          style={styles.heading}>
    Amount (PKR)
     :
        </PoppinsRegular>

        <PoppinsRegular
          style={styles.circularBoardStyle}
          numberOfLines={1}>
         {props.stock.item.opnamt}
        </PoppinsRegular>
        </View> */}



      </View>
    
    
    
    </View>
  );
};
export default ProductionSummaryCards;
