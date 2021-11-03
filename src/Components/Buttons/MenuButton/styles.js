const {StyleSheet} = require('react-native');
const {vh, vw} = require('../../../Utils/Units');

const styles = StyleSheet.create({
  buttonContainer: {
    width: 90 * vw,
    flexDirection: 'row',
    paddingVertical: 2 * vh,
    borderBottomWidth: 1,
    borderColor: '#F9F9F9',
  },
  icon: {
    height: 5 * vw,
    width: 5 * vw,
    marginLeft: 5 * vw,
    resizeMode: 'contain',
  },
  title: {
    width: 80 * vw,
    paddingLeft: 5 * vw,
    color: '#15222B',
    fontSize:4*vw
  },
  drop: {height: 5 * vw, width: 5 * vw, resizeMode: 'contain'},
});
export default styles;
