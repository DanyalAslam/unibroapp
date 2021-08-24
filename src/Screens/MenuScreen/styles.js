const { StyleSheet } = require("react-native");
import ThemeColors from '../../Utils/ThemeColors';
import { vh } from '../../Utils/Units';
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:ThemeColors.white,
        alignItems:'center',
        paddingTop:3*vh
    }
})
export default styles