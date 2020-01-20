import React, {Component} from 'react';
import {createDrawerNavigator, DrawerItems} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import {SafeAreaView, ScrollView, View, Text, Image} from 'react-native';

import Home from './routes';
import DrawerScreen from './screens/about_us';
import Contact from './screens/contactus';
import Settings from './routes2';
import Username, {DisplayImage} from './screens/username';

const customDrawerComponent = props => (
  <SafeAreaView style={{flex: 1}}>
    <View
      style={{
        height: 170,
        backgroundColor: 'teal',
      }}>
      <DisplayImage />
      <Text
        style={{
          color: 'white',
          fontSize: 25,
          fontWeight: 'bold',
          position: 'absolute',
          marginLeft: 5,
          bottom: 5,
        }}>
        <Username />
        {/* {this.screenProps.username} */}
        {/* {(GLOBAL.username = this)} */}
      </Text>
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
);
// var changeuser;
// class customDrawer extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: 'null',
//     };
//   }
//   changeuser = value => {
//     this.setState({username: value});
//   };
//   render() {
//     return (
//       <SafeAreaView style={{flex: 1}}>
//         <View
//           style={{
//             height: 170,
//             backgroundColor: 'teal',
//           }}>
//           <DisplayImage />
//           <Text
//             style={{
//               color: 'white',
//               fontSize: 25,
//               fontWeight: 'bold',
//               position: 'absolute',
//               marginLeft: 5,
//               bottom: 5,
//             }}>
//             <Username change={this.changeuser} />
//           </Text>
//         </View>
//         <ScrollView>
//           <DrawerItems {...this.props} />
//         </ScrollView>
//       </SafeAreaView>
//     );
//   }
// }

const MyDrawerNavigator = createDrawerNavigator(
  {
    Home: Home,
    About: DrawerScreen,
    Contact: Contact,
    Accounts_And_Settings: Settings,
  },
  {
    contentComponent: customDrawerComponent,
  },
);

export default createAppContainer(MyDrawerNavigator);
