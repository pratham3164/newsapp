import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Drawer extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View
          style={{
            height: 180,
            backgroundColor: '#8000F1',
            justifyContent: 'flex-end',
            padding: 10,
          }}>
          <Text style={{color: 'white', fontSize: 25, fontWeight: 'bold'}}>
            PRATHAM MALJI
          </Text>
        </View>
        <View style={{padding: 10}}>
          <Text
            style={style.text}
            onPress={() => this.props.navigation.navigate('AboutUs')}>
            about us
          </Text>
          <Text
            style={style.text}
            onPress={() => this.props.navigation.navigate('ContactUS')}>
            contact us
          </Text>
        </View>
      </View>
    );
  }
}
const style = StyleSheet.create({
  text: {
    fontSize: 22,
    margin: 5,
    padding: 4,
  },
});
