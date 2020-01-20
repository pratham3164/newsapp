import React, {Component} from 'react';
import {
  View,
  Text,
  Alert,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

import {Input, Submit, Optional} from '../components/sign';
import {} from '../actions';
import {connect} from 'react-redux';
import {change} from '../actions';

async function getArticles() {
  try {
    let article = await fetch(`https://api.myjson.com/bins/166syy`);
    let result = await article.json();
    console.log('inside getArticle');

    console.log(result);
    console.log(result.length);
    console.log(result.Users);
    console.log('outside getArticle');
    article = null;
    return result;
  } catch (error) {
    console.log(' couldnt fetch news from article');
    throw error;
  }
}
var view = null;
class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null,
      users: 'null',
      ischecking: false,
      ButtonPressed: false,
    };
  }

  render() {
    var view = this.state.ButtonPressed ? (
      this.state.ischecking ? (
        <View>
          <ActivityIndicator animating={true} />
          <Text style={{color: 'white'}}>wait</Text>
        </View>
      ) : this.state.username ? (
        this.state.password ? (
          <Text style={{color: 'red'}}>Username/Password wrong</Text>
        ) : (
          <Text style={{color: 'red'}}>Enter password</Text>
        )
      ) : (
        <Text style={{color: 'red'}}>Enter Username</Text>
      )
    ) : null;

    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'teal',
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('../assets/images/ic_launcher.png')}
          on
          style={{
            borderRadius: 60,
            width: 120,
            height: 120,
            margin: 15,
            alignSelf: 'center',
          }}
        />
        <TextInput
          style={style.input}
          placeholder="Username"
          onChangeText={username => {
            this.props.change(username);
            this.setState({username});
          }}
          placeholderTextColor="#fff"
          underlineColorAndroid="rgba(0,0,0,0)"
          onFocus={() => this.setState({ButtonPressed: false})}
          // onSubmitEditing={}
        />
        <TextInput
          style={style.input}
          placeholder="Password"
          onChangeText={password => this.setState({password})}
          placeholderTextColor="#fff"
          underlineColorAndroid="rgba(0,0,0,0)"
          secureTextEntry={true}
          onFocus={() => this.setState({ButtonPressed: false})}
        />

        {view}
        <TouchableOpacity
          style={style.submit}
          onPress={() => {
            this.setState({ischecking: true, ButtonPressed: true});
            getArticles().then(
              data => {
                this.setState({users: data});
                for (let i = 0; i < this.state.users.length; i++) {
                  // console.log(this.state.users.Users[i]);
                  var user = this.state.users.Users[i];
                  if (
                    user.Username == this.state.username &&
                    user.Password == this.state.password
                  ) {
                    console.log('successful');
                    this.props.secured(this.state.username);
                  }
                }
                this.setState({ischecking: false});
              },
              error => {
                console.log('login json fetch error');
                Alert.alert(JSON.stringify(error));
              },
            );
          }}>
          <Text style={style.signup}>LOG IN</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const style = StyleSheet.create({
  input: {
    color: 'white',
    backgroundColor: '#66B2B2',
    padding: 14,
    margin: 5,
    fontSize: 16,
    width: '80%',
    borderRadius: 20,
  },
  submit: {
    backgroundColor: '#004040',
    padding: 14,
    margin: 15,
    width: '80%',
    borderRadius: 20,
  },
  signup: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },
  bottom: {
    justifyContent: 'flex-end',
  },
});
function MapStateProps(state) {
  return {username: state.username};
}

export default connect(MapStateProps, {change})(login);
