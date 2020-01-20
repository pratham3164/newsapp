import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import WebView from './screens/webview';
import General from './screens/general';
import AboutUS from './screens/about_us';
import Drawer from './screens/drawer';
import ContactUS from './screens/contactus';
import SplashScreen from './screens/SplashScreen';
import login from './screens/login';

const AppNavigator = createStackNavigator(
  {
    SplashScreen: SplashScreen,
    Home: General,
    WebView: WebView,
    Drawer: Drawer,
    AboutUs: AboutUS,
    ContactUS: ContactUS,
    Login: login,
  },
  {
    headerMode: null,
  },
);

export default AppNavigator;
