import {   View,
    TouchableOpacity,
    Animated,
    Dimensions,
    Keyboard, } from "react-native";
import styles from './styles';
import {WheelPicker} from 'react-native-wheel-picker-android';
import styles from './styles';

export default class DropDown extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
          data: [],
          title: 'Pick an Item',
          selectedItem: 0,
          dataToShow: [],
          key: null,
        };

    }
    render()
    {
        let animatedBackdropStyle = {
            height: this.animatedBackdrop,
          };
        return(
         <Animated.View
         activeOpacity={1} 
         style={[styles.container, animatedBackdropStyle]} 
         >
             <AnimatedTouchable
             
             onPress={this.cancel}
             style={[
                styles.backdropButton,
                animatedContainerButton,
             ]}
             >

             </AnimatedTouchable>


         </Animated.View>
            )

    }
  
}
const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);
const AmatedRegularText = Animated.createAnimatedComponent(TextRegular);
const vh = Dimensions.get('window').height * 0.01;