import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {ScrollView} from 'react-native-gesture-handler';

import Username from './username';
import {changeBackgound} from '../components/appbar';
import {connect} from 'react-redux';
import {change, changeColor} from '../actions';

var setVal, setEdit;
class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: null,
      name: 'null',
      mail: 'pmalji5034@gmail.com',
      editable: false,
      color: '#DBDADD',
      photo: null,
    };
  }
  setVal = (prop, value) => {
    if (prop == 'mail') {
      this.setState({mail: value});
    }

    if (prop == 'name') {
      this.setState({name: value});
    }
  };

  setEdit = value => this.setState({editable: value});

  render() {
    return (
      <View>
        <ScrollView>
          <View style={style.header}>
            <FontAwesome5Icon
              size={20}
              name={'arrow-left'}
              style={{color: 'white', position: 'absolute', left: 7, top: 15}}
              onPress={() => this.props.navigation.openDrawer()}
            />
            <View>
              <TouchableOpacity
                style={{padding: 10, paddingBottom: 2}}
                onPress={() => {
                  console.log('pic tapped');
                  this.props.navigation.navigate('Viewpic');
                }}>
                <Image
                  source={require('../assets/images/i.jpeg')}
                  on
                  style={{
                    borderRadius: 60,
                    width: 120,
                    height: 120,
                    margin: 10,
                    marginTop: 30,
                    alignSelf: 'center',
                  }}
                />
              </TouchableOpacity>
              <Text style={style.title}>{this.props.username} </Text>
              <Text style={style.title}>{this.state.mail}</Text>
            </View>
          </View>

          <Text style={{fontSize: 25, fontWeight: 'bold', margin: 7}}>
            Account
          </Text>
          <View style={style.section}>
            <Tile icon="user" title="Username" />

            <View
              style={{
                flexDirection: 'row',
                alignContent: 'space-between',
              }}>
              <TextInput
                returnKeyType="done"
                placeholder={this.state.name}
                onChangeText={name => {
                  this.setState({name});
                  this.props.change(username);
                }}
                value={this.state.name}
                editable={this.state.editable}
                onBlur={() => {
                  this.setState({editable: false});
                  console.log('onBlur');
                  this.props.change(this.state.name);
                  // change(this.state.name);
                }}
                onSubmitEditing={() => {
                  this.setState({editable: false});
                  console.log('onsubmit');
                  // change(this.state.name);
                }}
                style={{
                  flex: 4,
                  width: 200,
                  fontSize: 20,
                  marginLeft: 30,
                  color: this.state.editable ? 'black' : '#dbdadd',
                }}
              />
              <FontAwesome5Icon
                name="pencil-alt"
                size={25}
                onPress={() => {
                  this.setState({editable: true});
                }}
                style={{
                  position: 'absolute',
                  right: 8,
                  padding: 3,
                  margin: 4,
                  alignSelf: 'center',
                  alignContent: 'center',
                }}
              />
            </View>
            <Tile icon="envelope" title="Email" />

            <View
              style={{
                flexDirection: 'row',
                alignContent: 'space-between',
              }}>
              <TextInput
                placeholder={this.state.mail}
                onChangeText={mail => this.setState({mail})}
                value={this.state.mail}
                editable={this.state.editable}
                onFocus={() => this.setState({color: 'black'})}
                onBlur={() => this.setState({editable: false})}
                onSubmitEditing={() => {
                  this.setState({editable: false});
                }}
                style={{
                  flex: 4,
                  width: 200,
                  fontSize: 20,
                  marginLeft: 30,
                  color: this.state.editable ? 'black' : '#dbdadd',
                }}
              />
              <FontAwesome5Icon
                name="pencil-alt"
                size={25}
                onPress={() => {
                  this.setState({editable: true});
                }}
                style={{
                  position: 'absolute',
                  right: 8,
                  padding: 3,
                  margin: 4,
                  alignSelf: 'center',
                  alignContent: 'center',
                }}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

class Tile extends Component {
  render() {
    return (
      <TouchableOpacity style={{flexDirection: 'row'}}>
        <FontAwesome5Icon
          name={this.props.icon}
          size={25}
          style={{padding: 3, margin: 4}}
          light
        />
        <Text style={style.text}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

const style = StyleSheet.create({
  header: {
    alignItems: 'center',
    backgroundColor: 'teal',
    padding: 15,
    marginBottom: 5,
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
  },
  section: {
    padding: 2,
    margin: 5,
    marginLeft: 15,
  },
  text: {
    fontSize: 20,
    padding: 2,
    margin: 2,
  },
});

function MapStateProps(state) {
  return {
    username: state.username,
    color: state.color,
  };
}

export default connect(MapStateProps, {change, changeColor})(Settings);
