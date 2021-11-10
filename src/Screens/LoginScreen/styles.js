const { StyleSheet } = require('react-native');
import ThemeColors from '../../Utils/ThemeColors';
import { vh, vw } from '../../Utils/Units';
const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  title: {
    width: 80 * vw,
    fontSize: 2.8 * vh,
    color: ThemeColors.primary,
    marginBottom: 6 * vh,
    marginTop: 6 * vh
  },
  field: {
    marginBottom: 2 * vh,
  },
  forgotText: {
    width: 80 * vw,
    textAlign: 'right',
    fontSize: 1.6 * vh,
    textDecorationLine: 'underline',
    color: '#2A73BA',
  },
  button: {
    marginVertical: 3 * vh,
  },
  forgotButton: { marginTop: 1 * vh },
  footerText: {
    color: ThemeColors.fontLightGrey,
    fontSize: 1.5 * vh,
  },
  footerTextBlue: {
    color: ThemeColors.primary,
    fontSize: 1.5 * vh,
  },
});
export default styles;
