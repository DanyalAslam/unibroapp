import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
const headerBackground = (props) => {
    console.log('headerBackground : ',props)
    return(
        <LinearGradient colors={['#154689', '#154689']} style={[{flex:1},props.style]} start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }}>
        </LinearGradient>
    )
}
export default headerBackground;