import React from 'react';
import { StyleSheet, View, TouchableHighlight, Image, Text } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  view: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 18.5,
    width: '100%',
    backgroundColor: '#FFFFFF',
    shadowColor: 'rgba(0, 0, 0, 0.15)',
    shadowRadius: 8
  },
  button: {
    backgroundColor: '#151515',
    width: 32,
    height: 30.21,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3
  },
  innerView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 24.10
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 50
  },
  text: {
    width: 147,
    marginLeft: 12,
    fontFamily: 'Open Sans',
    fontSize: 14,
    lineHeight: 19,
    fontWeight: 'bold'
  },
  downArrow: {
    marginLeft: 9
  }
});

const Header = () => (
  <View style={styles.view}>
    <TouchableHighlight style={styles.button}>
      <View>
        <MaterialCommunityIcons size={30} name="menu" color="#F5F5F5" />
      </View>
    </TouchableHighlight>
    <View style={styles.innerView}>
      <Image style={styles.image} source={require('../../static/john_doe.jpg')} />
      <Text style={styles.text}>
        Johnissimus Van-Doe
      </Text>
      <MaterialIcons size={16} name="keyboard-arrow-down" color="#151515" style={styles.downArrow} />
    </View>
  </View>
);

export default Header;
