import {createStackNavigator} from 'react-navigation-stack';
import Settings from './screens/settings';
import viewpic from './screens/viewpic';

const AppNavigator = createStackNavigator(
  {
    Home: Settings,
    Viewpic: viewpic,
  },
  {
    headerMode: null,
  },
);

export default AppNavigator;
