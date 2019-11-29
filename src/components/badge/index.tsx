import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  icon: {
    color: '#FEFEFE'
  },
  label: {
    color: '#FEFEFE',
    fontWeight: 'bold',
    fontFamily: 'Open Sans',
    marginLeft: 9.33
  },
  clickable: {
    backgroundColor: '#28A745',
    borderRadius: 60,
    width: 343,
    height: 50,
    marginLeft: 16,
    marginRight: 16
  },
  viewWithinClickable: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 128,
    marginTop: 12
  }
});

const Badge = () => (
  <TouchableHighlight style={styles.clickable}>
    <View style={styles.viewWithinClickable}>
      <MaterialCommunityIcons style={styles.icon} name="clipboard-account" size={15} />
      <Text style={styles.label}>
        Club Member
      </Text>
    </View>
  </TouchableHighlight>
);

export default Badge;
