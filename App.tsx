import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';

import Home from './src/components/home';
import Header from './src/components/header';
import Footer from './src/components/footer';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    height: '125vh'
  }
});

export default class App extends Component {
  componentDidMount() {
    Font.loadAsync({
      'Open Sans': require('./assets/fonts/OpenSans-Regular.ttf')
    })
  }
  render = () => (
    <View style={styles.container}>
      <Header />
      <Home />
      <Footer />
    </View>
  );
}
