import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {SearchBar} from 'react-native-elements';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Lists from './general';

const general = 'general';
const sports = 'sports';
const science = 'science';
const business = 'business';
// var category;

export default class TabsN extends Component {
  constructor() {
    super();
    this.state = {category: general};
  }

  render() {
    return (
      <Container>
        <Header style={{backgroundColor: 'teal'}}>
          <Body style={{alignContent: 'center'}}>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 30}}>
              NEWS APP
            </Text>
          </Body>
          <Right>{/* <SearchBar /> */}</Right>
        </Header>
        {/* <Text
          onPress={() => {
            this.state.category = sports;
            console.log('presses');
          }}
          style={{margin: 10, fontSize: 50}}>
          hello
        </Text>
        <Text onPress={() => (this.state.category = general)}>hello</Text>
        <Lists
          navigate={url =>
            this.props.navigation.navigate('WebView', {url: url})
          }
          category={this.category}
        />

        {/* <ScrollableTabView
          renderTabBar={() => <DefaultTabBar />}
          ref={tabView => {
            this.tabView = tabView;
          }}>
          <Text tabLabel="Tab #1">My</Text>
          <Text tabLabel="Tab #2">favorite</Text>
          <Text tabLabel="Tab #3">project</Text>
          <TouchableOpacity
            tabLabel="Back"
            onPress={() => this.tabView.goToPage(0)}>
            <Text>Lets go back!</Text>
          </TouchableOpacity>
        </ScrollableTabView> */}{' '}
        */}
        <Tabs>
          <Tab
            textStyle={{color: 'white'}}
            tabStyle={{backgroundColor: 'teal'}}
            activeTabStyle={{backgroundColor: 'teal'}}
            activeTextStyle={{color: 'white', fontWeight: 'bold'}}
            heading="General">
            <Lists
              navigate={url =>
                this.props.navigation.navigate('WebView', {url: url})
              }
              category={general}
            />
          </Tab>
          <Tab
            textStyle={{color: 'white'}}
            tabStyle={{backgroundColor: 'teal'}}
            activeTabStyle={{backgroundColor: 'teal'}}
            activeTextStyle={{color: 'white', fontWeight: 'bold'}}
            heading="Sports">
            <Lists
              navigate={url =>
                this.props.navigation.navigate('WebView', {url: url})
              }
              category={sports}
            />
          </Tab>
          <Tab
            textStyle={{color: 'white'}}
            tabStyle={{backgroundColor: 'teal'}}
            activeTabStyle={{backgroundColor: 'teal'}}
            activeTextStyle={{color: 'white', fontWeight: 'bold'}}
            heading="Science">
            <Lists
              navigate={url =>
                this.props.navigation.navigate('WebView', {url: url})
              }
              category={science}
            />
          </Tab>
          <Tab
            textStyle={{color: 'white'}}
            tabStyle={{backgroundColor: 'teal'}}
            activeTabStyle={{backgroundColor: 'teal'}}
            activeTextStyle={{color: 'white', fontWeight: 'bold'}}
            heading="Business">
            <Lists
              navigate={url =>
                this.props.navigation.navigate('WebView', {url: url})
              }
              category={business}
            />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
