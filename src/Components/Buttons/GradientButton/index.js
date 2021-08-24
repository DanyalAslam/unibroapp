import React from 'react'
import { vh, vw } from '../../../Utils/Units';
import TouchableHOC from '../TouchableHOC';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import PoppinsMedium from '../../Text/PoppinsMedium';
import { connect } from 'react-redux';
import { ActivityIndicator } from 'react-native';
import ThemeColors from '../../../Utils/ThemeColors';
class GradientButton extends React.Component {
    onPressHandler = () => {
        if (this.props.globalLoading != true && this.props.loading != true) {
            if (this.props.onPress) {
                console.log('global ', this.props.globalLoading, ' loading ', this.props.loading);
                this.props.onPress()
            }
        }
    }
    render() {
        return (
            <TouchableHOC
                rippleColor={'white'}
                style={[styles.buttonContainer, this.props.style]}
                onPress={this.onPressHandler}
            >
                <LinearGradient colors={['#154689', '#154689']} style={styles.grad} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
                    {(this.props.globalLoading === true || this.props.loading === true) ? <ActivityIndicator size='small' color={ThemeColors.white} /> : <PoppinsMedium style={[styles.text, this.props.titleStyle]}>
                        {this.props.title}
                    </PoppinsMedium>}
                </LinearGradient>
            </TouchableHOC>
        )
    }
}
const mapStates = state => {
    return {
        globalLoading: false
    }
}
export default connect(mapStates, null)(GradientButton)