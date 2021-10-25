const {StyleSheet} = require('react-native');
import ThemeColors from '../../Utils/ThemeColors';
import {vh, vw} from '../../Utils/Units';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ThemeColors.white,
    // justifyContent:'center',alignItems:'center'
  },
  list: {
    width: 100 * vw,
    paddingVertical: 3 * vh,
  },
  listContent: {
    alignItems: 'center',
    paddingTop: 1 * vh,
    paddingBottom: 13 * vh,
  },
  inputField: {
    marginTop: 0 * vh,
    width: 70 * vw,
    height: 5 * vh,
    borderWidth: 0*vw,

    // backgroundColor: '#F5F6F8',
    backgroundColor: 'white',
 
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default styles;
