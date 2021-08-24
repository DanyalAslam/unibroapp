import React from 'react';
import {TextInput, View} from 'react-native';
import {fonts} from '../../../assets/fonts';
import {icons} from '../../../assets/images';
import ThemeColors from '../../../Utils/ThemeColors';
import {vw} from '../../../Utils/Units';
import IconButton from '../../Buttons/IconButton';
import styles from './styles';

class MainInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hideText: false,
    };
  }
  componentDidMount() {
    this.input.setNativeProps({
      style: {
        fontFamily: fonts.Poppins.light,
      },
    });
  }
  toggleEye = () => {
    this.setState({hideText: !this.state.hideText});
    this.input.setNativeProps({
      style: {
        fontFamily: fonts.Poppins.light,
      },
    });
  };
  renderEye = () => {     
    let icon = icons.showPasswordGrey;
    if (this.state.hideText) {
      icon = icons.showPasswordGrey;
    } else {
      icon = icons.hidePasswordGrey;
    }

    return (
      <IconButton
        style={{marginLeft: 2 * vw}}
        onPress={this.toggleEye}
        icon={icon}
      />
    );
  };
  renderRightIcon = () => {
    return (
      <IconButton
        style={{marginLeft: 3 * vw}}
        onPress={this.props.onRightIconPress}
        icon={this.props.rightIcon}
      />
    );
  };
  render() {
    var hideText = false;
    if (this.props.secureTextEntry === true) {
      if (this.state.hideText === false) {
        hideText = true;
      } else {
        hideText = false;
      }
    }

    return (
      <View style={[styles.fieldContainer, this.props.style]}>
        <TextInput
          placeholder="Text Field"
          placeholderTextColor={ThemeColors.placeholderGrey}
          {...this.props}
          selectionColor={ThemeColors.primary}
          style={[styles.field, this.props.fieldStyle]}
          secureTextEntry={hideText}
          ref={(r) => (this.input = r)}
        />
        {this.props.secureTextEntry === true && this.renderEye()}
        {this.props.rightIcon && this.renderRightIcon()}
      </View>
    );
  }
}
export default MainInput;
