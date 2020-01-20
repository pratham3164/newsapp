import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export var Input = props => {
  return (
    <TextInput
      style={style.input}
      placeholder={props.placeholder}
      placeholderTextColor="#fff"
      underlineColorAndroid="rgba(0,0,0,0)"
      secureTextEntry={props.placeholder == 'PASSWORD' ? true : false}
      onSubmitEditing={
        props.placeholder == 'PASSWORD'
          ? () => this.passwordInput.focus()
          : null
      }
      ref={
        props.placeholder == 'PASSWORD'
          ? input => (this.passwordInput = input)
          : null
      }
    />
  );
};
export var Submit = props => {
  return (
    <>
      <TouchableOpacity style={style.submit}>
        <Text style={style.signup}>{props.type}</Text>
      </TouchableOpacity>
    </>
  );
};

export var Optional = props => {
  return (
    <TouchableOpacity style={style.bottom} onPress={() => props.onPress()}>
      <Text style={{color: 'white'}}>
        Already Have An Account ?<Text style={{color: '#004040'}}> LogIn</Text>
      </Text>
    </TouchableOpacity>
  );
};
