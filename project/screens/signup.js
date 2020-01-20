import React, {Component} from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  View,
  Button,
  Alert,
  ActivityIndicator,
} from 'react-native';

import Environment from '../../Environment';

export default class Login extends Component {
  state = {
    username: '',
    password: '',
    isLoggingIn: false,
    message: '',
  };

  _userLogin = () => {
    this.setState({isLoggingIn: true, message: ''});

    var params = {
      username: this.state.username,
      password: this.state.password,
      grant_type: 'password',
    };

    var formBody = [];
    for (var property in params) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(params[property]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');

    var proceed = false;
    fetch('https://my-app-name.apps.stormpath.io/oauth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formBody,
    })
      .then(response => response.json())
      .then(response => {
        if (response.status == 200) proceed = true;
        else this.setState({message: response.message});
      })
      .then(() => {
        this.setState({isLoggingIn: false});
        if (proceed) this.props.onLoginPress();
      })
      .catch(err => {
        console.log('err');
        this.setState({message: err.message});
        this.setState({isLoggingIn: false});
      });
  };

  clearUsername = () => {
    this._username.setNativeProps({text: ''});
    this.setState({message: ''});
  };

  clearPassword = () => {
    this._password.setNativeProps({text: ''});
    this.setState({message: ''});
  };

  render() {
    return (
      <ScrollView style={{padding: 20}}>
        <Text style={{fontSize: 27}}>Login</Text>
        <TextInput
          ref={component => (this._username = component)}
          placeholder="Username"
          onChangeText={username => this.setState({username})}
          autoFocus={true}
          onFocus={this.clearUsername}
        />
        <TextInput
          ref={component => (this._password = component)}
          placeholder="Password"
          onChangeText={password => this.setState({password})}
          secureTextEntry={true}
          onFocus={this.clearPassword}
          onSubmitEditing={this._userLogin}
        />
        {!!this.state.message && (
          <Text style={{fontSize: 14, color: 'red', padding: 5}}>
            {this.state.message}
          </Text>
        )}
        {this.state.isLoggingIn && <ActivityIndicator />}
        <View style={{margin: 7}} />
        <Button
          disabled={
            this.state.isLoggingIn ||
            !this.state.username ||
            !this.state.password
          }
          onPress={this._userLogin}
          title="Submit"
        />
      </ScrollView>
    );
  }
}

// import React, {Component} from 'react';
// import {
//   View,
//   Text,
//   ScrollView,
//   Image,
//   TextInput,
//   StyleSheet,
// } from 'react-native';
// import {Input, Submit, Optional} from '../components/sign';

// export default class login extends Component {
//   constructor(props) {
//     super(props);
//     this.passwordInput;
//   }

//   render() {
//     return (
//       <View
//         style={{
//           flex: 1,
//           backgroundColor: 'teal',
//           justifyContent: 'center',
//           alignContent: 'center',
//           alignItems: 'center',
//         }}>
//         <Image
//           source={require('../assets/images/ic_launcher.png')}
//           on
//           style={{
//             borderRadius: 60,
//             width: 120,
//             height: 120,
//             margin: 15,
//             alignSelf: 'center',
//           }}
//         />
//         <TextInput
//           style={style.input}
//           placeholder="mail"
//           placeholderTextColor="#fff"
//           underlineColorAndroid="rgba(0,0,0,0)"
//           // secureTextEntry={props.placeholder == 'PASSWORD' ? true : false}
//           onSubmitEditing={() => this.passwordInput.focus()}
//         />
//         <TextInput
//           style={style.input}
//           placeholder="password"
//           placeholderTextColor="#fff"
//           underlineColorAndroid="rgba(0,0,0,0)"
//           secureTextEntry={true}
//           // onSubmitEditing={
//           //   props.placeholder == 'PASSWORD'
//           //     ? () => this.passwordInput.focus()
//           //     : null
//           // }
//           ref={input => (this.passwordInput = input)}
//         />
//         {/* // <Input placeholder="EMAIL ID" />
//         // <Input placeholder="PASSWORD" /> */}
//         <Submit type="SIGN UP" />
//         <Optional onPress={() => this.props.navigation.navigate('Login')} />
//       </View>
//     );
//   }
// }

// const style = StyleSheet.create({
//   input: {
//     color: 'white',
//     backgroundColor: '#66B2B2',
//     padding: 14,
//     margin: 5,
//     fontSize: 16,
//     width: '80%',
//     borderRadius: 20,
//   },
//   submit: {
//     backgroundColor: '#004040',
//     padding: 14,
//     margin: 15,
//     width: '80%',
//     borderRadius: 20,
//   },
//   signup: {
//     color: 'white',
//     textAlign: 'center',
//     fontSize: 20,
//   },
//   bottom: {
//     // position: 'absolute',
//     // bottom: 8,
//     justifyContent: 'flex-end',
//   },
// });
