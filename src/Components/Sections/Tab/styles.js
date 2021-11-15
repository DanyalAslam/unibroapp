import ThemeColors from '../../../Utils/ThemeColors';

const {StyleSheet} = require('react-native');
const {vw, vh} = require('../../../Utils/Units');

const styles = StyleSheet.create({
  container: {
    width: 10 * vw,
    height: 10 * vh,
    // position:'absolute',
    // bottom:0,
    // left:0
    // backgroundColor:'red'
  },
  animatedContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
    height: 7 * vh,
    width: 90 * vw,
    borderRadius: 3 * vw,
    position: 'absolute',
    bottom: 3 * vh,
    left: 5 * vw,
    backgroundColor: 'rgba(255,255,255,0.6)',
  },
  blur: {borderRadius: 3 * vw, flex: 1},
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 7 * vh,
    width: 90 * vw,
    borderRadius: 0 * vw,
    position: 'absolute',
    bottom: 0 * vh,
    left: 0 * vw,
    backgroundColor: 'rgba(255,255,255,0.0)',
  },
  tabButton: {
    height: 7 * vh,
    width: 30 * vw,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabIcon: {
    height: 3 * vh,
    width: 15 * vw,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    width: 100 * vw,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 5 * vw,
  },
  label: {
    color: ThemeColors.primary,
    fontSize: 1.6 * vh,
  },
  value: {
    color: '#050E37',
    fontSize: 1.6 * vh,
  },
});
export default styles;
