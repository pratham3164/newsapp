import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {b, c} from '../screens/general';
import {getArticles} from '../config/news';

var categoryOnPress = 'General';
export default class Category extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            categoryOnPress = this.props.category;
            c();
            getArticles(this.props.category).then(
              data => {
                b(data, this.category);
              },
              error => Alert.alert(JSON.stringify(error)),
            );
          }}>
          <Text
            style={[
              style.text,
              {
                color:
                  categoryOnPress == this.props.category ? 'black' : '#DBDADD',
              },
            ]}>
            {this.props.category}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const style = StyleSheet.create({
  text: {
    color: '#DBDADD',
    fontSize: 22,
    fontFamily: 'Roboto',
    marginHorizontal: 10,
    padding: 10,
  },
  onPress: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    marginHorizontal: 10,
    padding: 10,
  },
});
