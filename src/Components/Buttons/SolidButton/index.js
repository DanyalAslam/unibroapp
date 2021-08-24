import React from 'react'
import TouchableHOC from '../TouchableHOC';
import styles from './styles';
import PoppinsMedium from '../../Text/PoppinsMedium';
class SolidButton extends React.Component {
    onPressHandler = () => {
        if (this.props.onPress) {
            this.props.onPress()
        }
    }
    render() {
        return (
            <TouchableHOC
                rippleColor={'white'}
                style={[styles.buttonContainer, this.props.style]}
                onPress={this.onPressHandler}
            >
                <PoppinsMedium style={[styles.text, this.props.titleStyle]}>
                    {this.props.title}
                </PoppinsMedium>
            </TouchableHOC>
        )
    }
}

export default SolidButton