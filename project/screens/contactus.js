import React, {Component} from 'react';
import {
  View,
  Text,
  Linking,
  Button,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

import Appbar from '../components/appbar';

export default class Contact_us extends Component {
  render() {
    return (
      <View>
        <Appbar
          navigate={() => this.props.navigation.openDrawer()}
          title="CONTACTS US"
          icon="arrow-left"
        />
        {/* <View
          style={{
            padding: 5,
            backgroundColor: 'teal',
            flexDirection: 'row',
          }}>
          <FontAwesome5Icon
            size={20}
            name={'arrow-left'}
            style={{
              color: 'white',
              margin: 10,
            }}
            onPress={() => this.props.navigation.openDrawer()}
          />
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              margin: 8,
              fontWeight: 'bold',
              alignSelf: 'center',
            }}>
            Contact Us
          </Text>
        </View> */}

        <View style={{padding: 15, margin: 3}}>
          <Text style={{fontSize: 25}}>Contact Us Through</Text>
          <Contact
            link="mailto:support@example.com"
            type="envelope"
            name="MAIL"
          />
          <Contact link="tel:${1234567890}" type="phone" name="CALL" />
        </View>
        <View style={{padding: 15, margin: 3}}>
          <Text> FOLLOW US ON</Text>
          <Contact
            link="https://www.instagram.com/coppercodes/"
            type="instagram"
            name="INSTAGRAM"
          />
          <Contact
            link="https://www.twitter.com/coppercodes/"
            type="twitter"
            name="TWITTER"
          />
        </View>
        {/* {Linking.openURL('mailto:support@example.com')} */}
      </View>
    );
  }
}
class Contact extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => Linking.openURL(this.props.link)}
          style={style.ContactStyle}>
          <FontAwesome5Icon
            name={this.props.type}
            size={20}
            style={style.IconStyle}
          />
          <Text style={style.TextStyle}>{this.props.name}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const style = StyleSheet.create({
  ContactStyle: {
    flexDirection: 'row',
    padding: 10,
  },
  IconStyle: {
    margin: 5,
    alignSelf: 'center',
  },
  TextStyle: {
    fontSize: 20,
    margin: 6,
  },
});
