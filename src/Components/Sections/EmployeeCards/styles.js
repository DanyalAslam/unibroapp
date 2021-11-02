import Measurements from "../../../Utils/Measurements";
import { vh, vw } from "../../../Utils/Units";

const { StyleSheet } = require("react-native");
const { default: ThemeColors } = require("../../../Utils/ThemeColors");

const styles = StyleSheet.create({
    container: {
        width: 92 * vw,
        elevation: 10,
flexDirection:"row",
        // alignItems: 'center',
        padding: 3 * vw,
        backgroundColor: 'white',
        marginHorizontal: 4 * vw,
        marginTop: 2 * vh,
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
    imgContainer: {
        height: 20 * vw, width: 20 * vw, borderRadius: 10 * vw
    },
    container2: {
        marginTop: 2 * vh, marginLeft: 3 * vw, width: 70 * vw,
    },
    circularBoardStyle: {
        color: ThemeColors.primary,
        fontSize: 2.3 * vw,
        marginBottom: 0.5 * vh,
        marginLeft:1*vw
    },
    heading: {
        color: ThemeColors.backgroundBlack,
        fontSize: 2.3 * vw,
        marginBottom: 0.5 * vh,
        fontWeight:"bold"
    }

})
export default styles;