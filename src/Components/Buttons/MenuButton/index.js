import React from 'react'
import TouchableHOC from '../TouchableHOC';
import styles from './styles';
import { Image } from 'react-native';
import PoppinsRegular from '../../Text/PoppinsRegular';
import { icons } from '../../../assets/images';
const MenuButton = (props) => {
    return(
        <TouchableHOC {...props} style={styles.buttonContainer}>
            {/* <Image source={props.icon} style={styles.icon}/> */}
            <PoppinsRegular 
            
           
            style={[styles.title, props.style]}
            >
                {props.title}
            </PoppinsRegular>
            <Image source={props.icon} style={styles.drop}/> 
        </TouchableHOC>
    )
}
export default MenuButton;