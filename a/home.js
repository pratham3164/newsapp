import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Container, Content, Tab, Tabs, Body, Right, List} from 'native-base';

import {SearchBar} from 'react-native-elements';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Lists from './general';
import Header from '../components/appbarNavigator';
import ListGen from './general';

const general = 'general';
const sports = 'sports';
const science = 'science';
const business = 'business';

export var changeCategory;

export default class TabsN extends Component {
  constructor() {
    super();
    this.state = {
      category: general,
    };
  }

  changeCategory = category => {
    this.setState = {
      category: category,
    };
  };
  //   change = changeCategory;

  render() {
    return (
      <Container>
        <Header />
        <ListGen horizontal={true} category={'sports'} />
        <ListGen horizontal={false} category={this.state.category} />
      </Container>
    );
  }
}
