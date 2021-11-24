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

    marginTop:20*vh, //new
    // flex:1,//old,
   alignItems:"center",
   justifyContent:"center",

},
content:{
    height:10*vh,
    width:50*vw,
    backgroundColor:'white',
    borderRadius:2*vw,
    elevation:10,

    justifyContent:"center",
    alignItems:"center"

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