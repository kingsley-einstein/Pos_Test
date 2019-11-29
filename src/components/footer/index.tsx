import React from 'react';
import { StyleSheet, TouchableHighlight, View, Text } from 'react-native';

const styles = StyleSheet.create({
  view: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  columnView: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  whiteTouchable: {
    backgroundColor: '#FEFEFE',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowColor: 'rgba(0, 0, 0, 0.07)',
    width: 130,
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  bottomWhiteTouchable: {
    backgroundColor: '#FEFEFE',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowColor: 'rgba(0, 0, 0, 0.07)',
    width: 130,
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  blueTouchable: {
    height: 110,
    width: 205,
    backgroundColor: '#002A5C',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowColor: 'rgba(0, 0, 0, 0.07)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 6,
    borderRadius: 3
  },
  whiteText: {
    color: '#FFFFFF',
    fontFamily: 'Open Sans',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 27
  }
});

const Footer = () => (
  <View style={styles.view}>
    <View style={styles.columnView}>
      <TouchableHighlight style={styles.whiteTouchable}>
        <View>
          <Text style={{ fontWeight: 'bold', fontFamily: 'Open Sans', fontSize: 14, color: '#151515', lineHeight: 19 }}>
            New Order
          </Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight style={styles.bottomWhiteTouchable}>
        <View>
          <Text style={{ fontFamily: 'Open Sans', fontSize: 14, color: 'rgba(0, 0, 0, 0.6)', lineHeight: 19 }}>
            Cancel Order
          </Text>
        </View>
      </TouchableHighlight>
    </View>
    <TouchableHighlight style={styles.blueTouchable}>
      <View>
        <Text style={styles.whiteText}>
          Checkout
        </Text>
      </View>
    </TouchableHighlight>
  </View>
);

export default Footer;
