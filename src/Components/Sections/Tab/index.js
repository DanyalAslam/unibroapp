import React from 'react';
import {Animated, View} from 'react-native';
import ThemeColors from '../../../Utils/ThemeColors';
import styles from './styles';
import {tabIcons} from '../../../assets/images';
import IconButton from '../../Buttons/IconButton';
import {BlurView} from '@react-native-community/blur';
const getIcon = (routeName, isActive) => {

  console.log('getIconsss',routeName)
  switch (routeName) {
    case 'HomeStack': {
      return isActive ? tabIcons.HomeActive : tabIcons.HomeInactive;
    }
    case 'EmployeeStack': {
      return isActive
        ? tabIcons.NotificationsActive
        : tabIcons.NotificationsInactive;
    }
    case 'MenuStack': {
      return isActive ? tabIcons.MenuActive : tabIcons.MenuInactive;
    }
  }
};
const renderButtons = (state, descriptors, navigation, position) => {
  return state.routes.map((route, index) => {
    var isFocused = index == state.index;
    const onPress = () => {
      const event = navigation.emit({
        type: 'tabPress',
        target: route.key,
        canPreventDefault: true,
      });

      if (!isFocused && !event.defaultPrevented) {
        navigation.navigate(route.name);
      }
    };

    const onLongPress = () => {
      navigation.emit({
        type: 'tabLongPress',
        target: route.key,
      });
    };
    return (
      <IconButton
        rippleColor={isFocused ? ThemeColors.fontDarkGrey : ThemeColors.primary}
        rippleCentered={true}
        onPress={onPress}
        onLongPress={onLongPress}
        icon={getIcon(route.name, isFocused)}
        iconStyle={styles.tabIcon}
        style={styles.tabButton}
      />
    );
  });
};
class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.scale = new Animated.Value(0);
  }
  componentDidMount() {
    Animated.timing(this.scale, {
      toValue: 1,
      duration: 500,
      delay: 1000,
    }).start();
  }
  render() {
    const {state, descriptors, navigation, position} = this.props;
    const animatedStyles = {
      transform: [{scaleX: this.scale}, {scaleY: this.scale}],
    };
    return (
      <Animated.View style={[styles.animatedContainer, animatedStyles]}>
        <BlurView
          key={state.index}
          style={styles.blur}
          blurType="light"
          overlayColor="transparent"
          blurAmount={20}
          reducedTransparencyFallbackColor="transparent"
        />
        <View style={styles.buttonContainer}>
          {renderButtons(state, descriptors, navigation, position)}
        </View>
      </Animated.View>
    );
  }
}
export default Tab;
