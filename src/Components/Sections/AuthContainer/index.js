import React from 'react'
import { Image, ImageBackground, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { backgrounds, icons, TitleImages } from '../../../assets/images';
import Measurements from '../../../Utils/Measurements';
import ThemeColors from '../../../Utils/ThemeColors';
import { vh, vw } from '../../../Utils/Units';
import styles from './styles';
import CircularBold from '../../Text/CircularBold';
import IconButton from '../../Buttons/IconButton'
class AuthContainer extends React.Component {
    renderBackButton = () => {
        if(this.props.onBackPress){
            return (
                <IconButton
                    style={styles.backButton}
                    icon={icons.backBlack}
                    onPress={this.props.onBackPress}
                />
            )
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={TitleImages.Logo}
                    style={styles.topBackground}
                />
                <KeyboardAwareScrollView showsVerticalScrollIndicator={false} style={styles.scroll}
                   bounces={false} alwaysBounceVertical={false} extraScrollHeight={-30*vh}>
                    <View style={styles.topOverlay}>
                        {this.renderBackButton()}
                    </View>
                    <CircularBold style={styles.title}>
                        {/* {this.props.title} */}
                    </CircularBold>
                    <View style={styles.sheetContainer}>
                        {/* <Image
                            style={styles.logo}
                            source={TitleImages.LogoBlue}
                        /> */}
                        {this.props.children}
                    
                    </View>
                </KeyboardAwareScrollView>
            </View>
        )
    }
}
export default AuthContainer;