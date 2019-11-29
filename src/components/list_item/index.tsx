import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const styles = StyleSheet.create({
  touchable: {
    shadowColor: 'rgba(0, 0, 0, 0.07)',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    borderRadius: 3,
    backgroundColor: '#FEFEFE',
    marginBottom: 10,
    borderColor: '#dcdcdc',
    width: '100%'
  },
  view: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  innerView: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 36,
    height: 51
  },
  middleText: {
    fontSize: 14,
    fontStyle: 'normal',
    lineHeight: 17,
    width: 176,
    color: '#151515',
    marginRight: 34,
    marginLeft: 9,
    marginBottom: 23,
    marginTop: 10,
    fontFamily: 'Open Sans'
  },
  priceText: {
    fontSize: 18,
    lineHeight: 25,
    textAlign: 'right',
    color: '#151515',
    fontWeight: 'bold',
    marginRight: 10,
    fontFamily: 'Open Sans'
  },
  incrementText: {
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 19,
    fontWeight: 'bold',
    color: 'rgba(0, 0, 0, 0.6)',
    fontFamily: 'Open Sans'
  },
  discountText: {
    fontSize: 12,
    fontStyle: 'normal',
    lineHeight: 19,
    color: '#FF2929',
    width: 88,
    height: 19,
    marginBottom: 6,
    fontFamily: 'Open Sans'
  } 
});


interface TouchableProp {
  name: string;
  price: string;
  discount?: string;
  image: any;
  incremented?: string;
}

const ListItem = ({ name, price, discount, image, incremented }: TouchableProp) => (
  <TouchableOpacity style={styles.touchable}>
    <View style={styles.view}>
      <Image source={image} style={styles.image} />
      <Text style={styles.middleText}>
        {name}
      </Text>
      <View style={styles.innerView}>
        <Text style={styles.priceText}>
          {price}
        </Text>
        {incremented && <Text style={styles.incrementText}>
          {incremented}
        </Text>
        }
        {discount && <Text style={styles.discountText}>
          {discount}
        </Text>
        }
      </View>
    </View>
  </TouchableOpacity>
);

export default ListItem;
