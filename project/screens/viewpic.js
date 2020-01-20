import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, PermissionsAndroid} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

export default class viewpic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: {uri: '../assets/images/i.jpeg'},
    };
  }

  handleChoosePhoto = () => {
    const options = {
      noData: false,
    };
    ImagePicker.showImagePicker(options, response => {
      console.log(response);
      if (response.uri) {
        this.setState({photo: response});
        console.log(this.state.photo.path);
      }
    });
  };

  render() {
    console.log('image');
    console.log(this.state.photo.uri);
    const {photo} = this.state;
    console.log(photo.uri);
    return (
      <View style={style.page}>
        <FontAwesome5Icon
          size={20}
          name={'arrow-left'}
          style={{color: 'white', position: 'absolute', left: 7, top: 15}}
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Text style={style.change} onPress={this.handleChoosePhoto}>
          CHANGE
        </Text>
        <Image
          source={{uri: photo.uri}}
          style={{
            width: '100%',
            margin: 10,
            marginTop: 30,
            alignSelf: 'center',
          }}
        />
      </View>
    );
  }
}

const style = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  change: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    position: 'absolute',
    right: 10,
    top: 15,
  },
});
