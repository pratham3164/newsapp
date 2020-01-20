import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Login from './screens/login';
import App from '../App';

const AppNavigator = createStackNavigator(
  {
    App: App,
  },
  {
    headerMode: null,
  },
);

export default createAppContainer(AppNavigator);
