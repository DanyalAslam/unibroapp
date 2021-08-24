import React from 'react';
import styles from './styles';
import TextHOC from '../TextHOC';
export default class CircularBold extends React.Component {
  render() {
    return (
      <TextHOC {...this.props} style={[styles.font, this.props.style]}>
        {this.props.children}
      </TextHOC>
    );
  }
}
