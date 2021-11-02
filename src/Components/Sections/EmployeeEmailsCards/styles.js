import Measurements from "../../../Utils/Measurements";
import { vh, vw } from "../../../Utils/Units";

const { StyleSheet } = require("react-native");
const { default: ThemeColors } = require("../../../Utils/ThemeColors");

const styles = StyleSheet.create({ 
    container:{ 
        width: 92 * vw,
        elevation: 10,
   
        alignItems: 'center',
        padding: 3 * vw,
        backgroundColor: 'white',
marginHorizontal:4*vw,
marginTop:2*vh,
        marginBottom: 2 * vh,
        borderRadius: 2 * vw,
        shadowColor: '#000',
        shadowOffset: {
          width: 5,
          height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 15,

    },
    imgContainer:{
        height: 11 * vw, width: 11 * vw, borderRadius: 6 * vw
    },
    container2:{
        marginTop:2*vh,marginLeft: 3 * vw, width: 70 * vw,justifyContent:'center',alignItems:'center'
    },
    circularBoardStyle:{
        color: ThemeColors.primary,
        fontSize: 3.5 * vw,
        marginBottom: 0.5 * vh,
    }
    
})
export default styles;