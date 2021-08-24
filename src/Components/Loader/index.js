import React, {Component} from 'react';
import {View, Modal, ActivityIndicator, StatusBar} from 'react-native';
import styles from './styles';

import TextRegular from '../../Components/TextRegular';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {connect} from 'react-redux';

class Loader extends React.Component {

  render() {

    return (
      <Modal
        key={'cbt'}
        visible={this.props.loading}
        // visible={this.props.Reducer.loading}
        transparent={true}
        animationType="fade">
        <View style={styles.modalTouchable}>
          <View style={styles.imageBg}>
            {/* <TouchableHOC style={styles.crossContainer} onPress={this.onCross}>
              <Image source={icons.cross} style={styles.cross} resizeMode="contain" />
            </TouchableHOC> */}
            <View style={styles.container}>
              <ActivityIndicator size="small" color="black" />
              <TextRegular style={styles.text}>Loading...</TextRegular>
      
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}
mapStateToProps = (state) => {

    console.log('state345',state);
    return {
        
  loading:state?.GeneralReducer?.loading
     
    }
}

export default connect(mapStateToProps,null)(Loader)
