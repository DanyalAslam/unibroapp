/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {

  StyleSheet,

  View,
} from 'react-native';

import {Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './src/redux'
import Loader from './src/Components/Loader';

import Navigation from './src/Navigation';


class App extends React.Component {
  render()
  {
    return (
      <View style={styles.container}>
   <Provider store={store}>
   <PersistGate persistor={persistor}>
   <Loader />
            <Navigation />
          </PersistGate>
   </Provider>
      </View>
    )

  }



};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:'red'
  },
});

export default App;
