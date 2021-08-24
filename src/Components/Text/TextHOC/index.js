import React from 'react';
import styles from './styles';
import {Text} from 'react-native';
import Clipboard from '@react-native-community/clipboard';
import Api from '../../../Api';
import {showToast} from '../../../../src/Utils';
const TextHOC = (props) => {
  return (
    <Text
      onLongPress={() => copyText(props.children)}
      ellipsizeMode="tail"
      adjustsFontSizeToFit={false}
      allowFontScaling={false}
      {...props}
      style={[styles.font, props.style]}>
      {props.children}
    </Text>
  );
};
const copyText = (children) => {
  for (var child in children) {
    if (typeof children[child] === 'string') {
      Clipboard.setString(child);
      showToast('"' + children[child] + '" copied to clipboard.');
      break;
    }
  }
};
export default TextHOC;
