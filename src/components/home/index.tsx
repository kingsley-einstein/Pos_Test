import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import List from '../list';
import Search from '../search';
import Badge from '../badge';
import Summary from '../summary';
import ListHeader from '../list_header'

import { Model } from '../../models';

const styles = StyleSheet.create({
  view: {
    marginTop: 10
  }
});

const models: Model[] = [
  {
    name: "Kendall Jackson Vinter's Reserve Chardonnay",
    image: require('../../static/red_wine.jpg'),
    price: '$349.38',
    discount: null,
    incremented: null,
    id: 1
  },
  {
    name: "Kendall Jackson Vinter's Reserve Chardonnay Luxury Wine",
    price: '$4,439.98',
    image: require('../../static/black_wine.jpg'),
    discount: null,
    incremented: '2 x $2,035.67',
    id: 2
  },
  {
    name: "Kendall Chardonnay",
    price: '$349.38',
    image: require('../../static/wine_in_case.jpg'),
    discount: null,
    incremented: null,
    id: 3
  },
  {
    name: "Kendall Jackson Vinter's Reserve Chardonnay",
    image: require('../../static/red_wine.jpg'),
    price: '$5,349.38',
    discount: null,
    incremented: null,
    id: 4
  },
  {
    name: "Jackson Luxury Wine",
    price: '$439.98',
    image: require('../../static/black_wine.jpg'),
    discount: '10% {-$25.99}',
    incremented: '2 x $345.67',
    id: 5
  }
];

interface HomeState {
  data: Model[]
}

export default class Home extends Component<{}, HomeState> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: models
    };
  }
  render() {
    const { data } = this.state;
    return (
      <View style={styles.view}>
        <Badge />
        <Search />
        <ListHeader />
        <List data={data} />
        <Summary />
      </View>
    );
  }
}
