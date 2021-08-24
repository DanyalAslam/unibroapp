const { StyleSheet } = require("react-native");
import ThemeColors from '../../Utils/ThemeColors';
import { vh, vw } from '../../Utils/Units';
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:ThemeColors.white,
        alignItems:'center',
        paddingVertical:3*vh
    },
    title:{ 
        fontSize: 2 * vh, 
        width:90*vw,
        color: ThemeColors.darkBlue, 
        marginBottom: 2 * vh 
    },
    desc:{
        fontSize: 1.8 * vh, 
        width:90*vw,
        color: ThemeColors.fontLightGrey, 
        marginBottom: 2 * vh 
    }
})
export default styles