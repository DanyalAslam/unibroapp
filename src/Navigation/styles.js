import {StyleSheet} from 'react-native';
import {fonts} from '../assets/fonts';
import {vh, vw} from '../Utils/Units';

const styles = StyleSheet.create({
  defaultHeaderTitleStyle: {
    color: 'white',
    fontFamily: fonts.circular.bold,
    fontSize: 2.6 * vh,
    paddingBottom: 2 * vh,
  },
  defaultHeaderTitleContainerStyle: {},
  defaultHeaderRightContainerStyle: {
    paddingBottom: 2 * vh,
    paddingRight: 5 * vw,
  },
  defaultHeaderLeftContainerStyle: {
    paddingBottom: 2 * vh,
    paddingLeft: 5 * vw,
  },
  deafultHeaderStyle: {
    height: 16 * vh,
    paddingBottom: 2 * vh,
  },
});
export default styles;
