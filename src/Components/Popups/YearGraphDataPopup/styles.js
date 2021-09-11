import { vh,vw } from "../../../Utils/Units"
const {StyleSheet} = require("react-native")
const styles = StyleSheet.create({

container:{
    flex:1,
    backgroundColor:'red'
},
overlayContainer:{

    height:100*vh,
    width:100*vw,
    position:'absolute',
    left:0,
    top:0
},
contentContainer : {
    flex:1,
   alignItems:"center",
   justifyContent:"center",

},
content:{
    height:15*vh,
    width:70*vw,
    backgroundColor:'white',
    borderRadius:5*vw,
    elevation:10

},
blur:{
    height:100*vh,
    width:100*vw,
    position:"absolute",
    left:0,
    top:0
}

})

export default styles