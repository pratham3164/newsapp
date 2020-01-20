import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {connect} from 'react-redux';

export var b, changeBackgound;
class appbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: 'teal',
    };
    changeBackgound = color => {
      console.log('theme fn called');
      this.setState({backgroundColor: color});
    };
  }

  componentDidUpdate() {}

  render() {
    console.log('in appbar');
    console.log(this.props.color.color);
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 60,
          backgroundColor: this.props.color.color,
          padding: 5,
          alignContent: 'center',
        }}>
        <FontAwesome5
          size={30}
          onPress={this.props.navigate}
          style={{color: 'white', padding: 10, alignItems: 'center'}}
          name={this.props.icon}
          solid
        />
        <Text style={style.title}>{this.props.title}</Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  appbar: {
    flexDirection: 'row',
    height: 60,
    // backgroundColor: this.state.backgroundColor,
    padding: 5,
    alignContent: 'center',
  },
  text: {
    marginLeft: 5,
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    paddingRight: 10,
    fontFamily: 'Roboto',
  },
  title: {
    marginLeft: 5,
    justifyContent: 'flex-start',
    textAlign: 'left',
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
});

function MapStateProps(state) {
  return {color: state.color};
}

export default connect(MapStateProps, null)(appbar);
