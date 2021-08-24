const { StyleSheet } = require("react-native");
const { vh, vw } = require("../../../Utils/Units");

const styles = StyleSheet.create({
    buttonContainer: { 
        width: 30 * vw, 
        height: 5 * vh,
        borderRadius: 6,
        backgroundColor: 'white',
        alignItems:'center',
        justifyContent:'center'
    },
    text:{
        color:'white',
        fontSize:1.8*vh
    }
})
export default styles