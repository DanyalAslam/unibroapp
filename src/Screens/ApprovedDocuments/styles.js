const { StyleSheet } = require("react-native");
import ThemeColors from '../../Utils/ThemeColors';
import { vh, vw } from '../../Utils/Units';
const styles = StyleSheet.create({
    container:{
        // flex:1,
        backgroundColor:ThemeColors.white,
        // alignItems:'center',
        // paddingVertical:3*vh,
        // paddingBottom:40*vh

        // paddingTop:10*vh,
        // paddingBottom:20*vh
    },
    firstContainer :{
        backgroundColor: 'white', 
        width: 92 * vw, 
        
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 5,
},
shadowOpacity: 0.34,
shadowRadius: 6.27,

elevation: 10,
        
        
        marginVertical: 3 * vh

    },
    secondContainer :{
        backgroundColor: 'white', 
        paddingBottom: 5 * vh, width: 92 * vw, 
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        
        elevation: 10,
        
        marginVertical: 3 * vh

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