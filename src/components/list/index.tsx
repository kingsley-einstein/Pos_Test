import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import ListItem from '../list_item';

import { Model } from '../../models';

interface ListProp {
  data: Model[]
}

const styles = StyleSheet.create({
  flatlist: {
    width: '100%',
    padding: 10
  }
});

const List = ({ data }: ListProp) => (
  <FlatList 
    data={data} 
    renderItem={({ item }) => (
      <ListItem 
        name={item.name} 
        discount={item.discount} 
        price={item.price} 
        image={item.image} 
        incremented={item.incremented} 
      />
    )}
    keyExtractor={(item) => item.id.toString()}
    style={styles.flatlist}
  />
);

export default List;
