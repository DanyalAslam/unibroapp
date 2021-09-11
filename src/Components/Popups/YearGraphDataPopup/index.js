import { BlurView } from '@react-native-community/blur';
import React from 'react'
import {Image,View,Text, Modal,TouchableOpacity} from 'react-native'

import styles from './styles'

class YearGraphDataPopup extends React.Component {
    constructor(props)
    {
        super(props);
        this.state ={
            visible : false
        }
    }
    show = () =>{
        this.setState({visible:true})
    }
    close = () => {
      
        this.setState({visible:false})
    }
    renderContent = () =>{
        return(
            <View style={styles.contentContainer}>
               <View style={styles.content}></View>
            </View>
        )
    }

    renderOverlay = () => {
return(
    <TouchableOpacity
    style={styles.overlayContainer}
    onPress={this.close}
    >
<BlurView 
blurType="light"
style={styles.blur}
></BlurView>
    </TouchableOpacity>
)

    }
    render(){
        return(
       <Modal
       animationType="fade"
       transparent={true}
       visible={this.state.visible}
       style={styles.container}
    
       >
            {this.renderOverlay()}
            {this.renderContent()}
       </Modal>

        )
    }
}

export default YearGraphDataPopup