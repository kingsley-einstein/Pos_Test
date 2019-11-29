import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  spacer: {
    flex: 1
  },
  view: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 5
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: 16,
    color: '#151515',
    fontFamily: 'Open Sans'
  }
});

const Spacer = () => (
  <View style={styles.spacer}></View>
);

const ListHeader = () => (
  <View style={styles.view}>
    <Text style={styles.heading}>
      7 items
    </Text>
    <Spacer />
    <Text style={styles.heading}>
      #0134234
    </Text>
  </View>
);

export default ListHeader;
