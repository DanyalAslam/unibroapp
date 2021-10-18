import {fonts} from '../../../assets/fonts';
import ThemeColors from '../../../Utils/ThemeColors';
import {vh, vw} from '../../../Utils/Units';

const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  fieldContainer: {
    width: 80 * vw,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: ThemeColors.borderGrey,
    alignItems: 'center',
    // justifyContent: 'space-between',
  

    paddingHorizontal: 3 * vw,
    borderRadius: 5,
    height: 5 * vh,
    
  },
  field: {
    fontFamily: fonts.Poppins.light,
    width: 66 * vw,
    padding: 0,
    // backgroundColor: 'red',
    // paddingHorizontal: 2 * vw,
    // marginLeft: 1.5 * vw,
    margin: 0,
  },
});
export default styles;
