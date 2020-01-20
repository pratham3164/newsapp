import React, {Component} from 'react';
import {View, Image, Animated} from 'react-native';

class ImageLoader extends Component {
  state = {
    opacity: new Animated.Value(0),
  };
  onLoad = () => {
    Animated.timing(this.state.opacity, {
      toValue: 2,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };
  render() {
    return (
      <Animated.Image
        onLoad={this.onLoad}
        {...this.props}
        style={[
          {
            opacity: this.state.opacity,
            transform: [
              {
                scale: this.state.opacity.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.85, 1],
                }),
              },
            ],
          },
          this.props.style,
        ]}
      />
    );
  }
}

export default class SplashScreen extends Component {
  componentDidMount() {
    this.timeoutHandle = setTimeout(() => {
      this.props.navigation.navigate('Home');
    }, 3000);
  }
  componentWillUnmount() {
    clearTimeout(this.timeoutHandle); // This is just necessary in the case that the screen is closed before the timeout fires, otherwise it would cause a memory leak that would trigger the transition regardless, breaking the user experience.
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'teal',
        }}>
        <ImageLoader
          style={{width: 150, height: 150}}
          source={require('../assets/images/icon.png')}
        />
      </View>
    );
  }
}
