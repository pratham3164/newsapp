import React, {Component} from 'react';
import {ActivityIndicator, View, Text, Linking} from 'react-native';
import {WebView} from 'react-native-webview';
// import Share from 'react-native-share';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

export default class MyWeb extends Component {
  constructor(props) {
    super(props);
    this.state = {visible: true, favourite: false};
  }

  hideSpinner() {
    this.setState({visible: false});
  }
  addfav() {
    this.setState({favourite: true});
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <View
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
            onPress={() => this.props.navigation.navigate('Home')}
          />
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              margin: 8,
              fontWeight: 'bold',
              alignSelf: 'center',
            }}>
            NEWS
          </Text>
          <FontAwesome5Icon
            size={20}
            name={'heart'}
            solid
            style={{
              color: this.state.favourite ? '#002929' : 'white',
              margin: 10,
              position: 'absolute',
              right: 45,
              top: 5,
            }}
            onPress={() => {
              this.addfav();
            }}
          />
          <FontAwesome5Icon
            size={20}
            name={'share'}
            style={{
              color: 'white',
              margin: 10,
              position: 'absolute',
              right: 5,
              top: 5,
            }}
            onPress={() =>
              Linking.openURL(
                'whatsapp://send?text=' + this.props.navigation.getParam('url'),
              )
            }
            regular
          />
        </View>
        <WebView
          onLoad={() => this.hideSpinner()}
          style={{flex: 1}}
          source={{uri: this.props.navigation.getParam('url')}}
        />
        {this.state.visible && (
          <View
            style={{flex: 1, alignContent: 'center', backgroundColor: 'white'}}>
            <ActivityIndicator animating={this.state.isLoading} />
            <Text style={{textAlign: 'center', fontWeight: 'bold'}}>
              wait..
            </Text>
          </View>
        )}
      </View>
    );
  }
}
