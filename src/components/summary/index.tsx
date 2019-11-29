import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  spacer: {
    flex: 1
  },
  rowFlexedView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
    marginRight: 17
  },
  columnFlexedView: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  greyedText: {
    color: 'rgba(0, 0, 0, 0.6)',
    textAlign: 'right',
    fontSize: 13,
    lineHeight: 18,
    fontFamily: 'Open Sans'
  }
});

const Spacer = () => (
  <View style={styles.spacer}></View>
);

const Summary = () => (
  <View style={styles.rowFlexedView}>
    <Spacer />
    <Spacer />
    <View style={styles.columnFlexedView}>
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.greyedText}>
          Discount:
        </Text>
        <Text style={{ color: 'red', fontFamily: 'Open Sans', fontSize: 13, marginLeft: 6 }}>
          {"10% {-$25.99}"}
        </Text>
      </View>
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.greyedText}>
          Total:
        </Text>
        <Text style={{ color: '#151515', fontFamily: 'Open Sans', fontSize: 13, marginLeft: 6, fontWeight: 'bold' }}>
          $1,300.00
        </Text>
      </View>
    </View>
  </View>
);

export default Summary;
