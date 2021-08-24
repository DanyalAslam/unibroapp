const {StyleSheet} = require('react-native');
import ThemeColors from '../../Utils/ThemeColors';
import {vh, vw} from '../../Utils/Units';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ThemeColors.white,
    // backgroundColor: 'red',
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
});
export default styles;
