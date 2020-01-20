import React, {Component} from 'react';
import {Text, Image, View} from 'react-native';
import {c} from '../components/hor';
import {connect} from 'react-redux';
// import {change} from '../actions';

export var change, changeImage;
class Username extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Username: ' null',
    };
    change = username => {
      console.log('username ' + username);
      this.setState({Username: username});
      console.log('inside username');
      console.log(this.state.Username);
    };
  }
  render() {
    return <Text>{this.props.username}</Text>;
  }
}
export class DisplayImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uri: true,
    };
    changeImage = uri => {
      if (1) {
        this.setState({uri: uri});
      }
    };
  }
  render() {
    if (!this.state.uri) return null;
    return (
      <Image
        source={require('../assets/images/i.jpeg')}
        on
        style={{
          height: 170,
          width: '100%',
        }}
      />
    );
  }
}
function MapStateProps(state) {
  return {username: state.username};
}

export default connect(MapStateProps, null)(Username);
