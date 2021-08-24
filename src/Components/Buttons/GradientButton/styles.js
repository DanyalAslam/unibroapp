const { StyleSheet } = require("react-native");
const { vh, vw } = require("../../../Utils/Units");

const styles = StyleSheet.create({
    buttonContainer: { 
        width: 80 * vw, 
        height: 7 * vh,
        borderRadius: 6,
        backgroundColor: 'white' 
    },
    grad:{
        borderRadius: 6,
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    text:{
        color:'white',
        fontSize:2.2*vh
    }
})
export default styles