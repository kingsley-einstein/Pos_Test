import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  textField: {
    backgroundColor: '#FEFEFE',
    shadowColor: 'rgba(0, 0, 0, 0.07)',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    borderRadius: 3,
    margin: 16,
    width: 343,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 12
  },
  textBox: {
    backgroundColor: 'transparent',
    paddingLeft: 4,
    width: '100%',
    margin: 12
  },
  blackView: {
    backgroundColor: '#151515',
    borderRadius: 2,
    width: 75,
    height: 44,
    padding: 12,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const SearchField = () => (
  <View style={styles.textField}>
    <Ionicons name="md-search" size={20} color="#dcdcdc" />
    <TextInput style={styles.textBox} />
    <View style={styles.blackView}>
      <MaterialCommunityIcons name="barcode-scan" size={20} color="#FEFEFE" />
    </View>
  </View>
);

export default SearchField;
