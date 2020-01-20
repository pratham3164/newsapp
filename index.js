/**
 *
 * @format
 */

import {AppRegistry, View, Text} from 'react-native';
import MyApp from './App';
import {name as appName} from './app.json';
import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './project/reducers';

const store = createStore(reducers);
const AppContainer = () => {
  return (
    <Provider store={store}>
      <MyApp />
    </Provider>
  );
};
// import React, {Component} from 'react';
// import { AppRegistry } from 'react-native';
// import Login from './project/screens/login';

// class AwesomeProject extends Component {
//   state = {
//     isLoggedIn: false,
//   };

//   render() {
//     if (this.state.isLoggedIn) return <Secured />;
//     else
//       return <Login onLoginPress={() => this.setState({isLoggedIn: true})} />;
//   }
// }
// AppRegistry.registerComponent(AwesomeProject, () => AwesomeProject);

AppRegistry.registerComponent(appName, () => AppContainer);
