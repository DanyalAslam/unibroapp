import React from 'react';
import { Image, View } from 'react-native';
import ThemeColors from '../../../Utils/ThemeColors';
import { vh, vw } from '../../../Utils/Units';
import TouchableHOC from '../../Buttons/TouchableHOC';
import CircularBold from '../../Text/CircularBold';
import PoppinsRegular from '../../Text/PoppinsRegular';
import styles from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler'
const InspectionReportCards = (props) => {
  // console.log('InspectionReportCards1233', props)
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
            style={{
              color: ThemeColors.primary,
              fontSize: 3 * vw,
              fontWeight: 'bold',
              marginBottom: 0.5 * vh,
              marginLeft: 1 * vw,
              width: 40 * vw
            }}
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



        <TouchableOpacity
          onPress={() => props.onSuccess(props.stock.item.inspno)}
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
            Status:
          </PoppinsRegular>
          {props.stock.item.status === "FAIL" ? <PoppinsRegular
            style={{
              color: 'red',
              fontSize: 2.5 * vw,
              fontWeight:'bold',
              marginBottom: 0.5 * vh,
              marginLeft: 1 * vw,
              width: 10 * vw
            }}
            numberOfLines={2}>
            {props.stock.item.status}
          </PoppinsRegular> : <PoppinsRegular
            style={{
              color: 'green',
              fontWeight:'bold',
              fontSize: 2.5 * vw,
              marginBottom: 0.5 * vh,
              marginLeft: 1 * vw,
              width: 10 * vw
            }}
            numberOfLines={2}>
            {props.stock.item.status}
          </PoppinsRegular>}

        </View>



      </View>



    </View>
  );
};

export default InspectionReportCards;
