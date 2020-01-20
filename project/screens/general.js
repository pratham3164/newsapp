import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  FlatList,
  Alert,
  ActivityIndicator,
} from 'react-native';

import HorScroll from '../components/hor';
import Navigator from '../components/appbarNavigator';
import {getArticles} from '../config/news';
import List from '../components/verlist';
import Appbar from '../components/appbar';

export var b, formatdata, formatwait, c;
export class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: null,
      isError: false,
      isLoadingH: true,
    };

    formatwait = () => {
      this.setState({
        isLoading: true,
      });
    };
    formatdata = data => {
      this.setState({
        isLoading: false,
        data: data,
      });
    };

    b = formatdata;
    c = formatwait;
  }

  setLoadingH = () => this.setState({isLoadingH: false});

  componentDidMount() {
    getArticles('general').then(
      data => {
        formatdata(data);
      },
      error => Alert.alert(JSON.stringify(error)),
    );
  }
  render() {
    const view =
      this.state.isLoading || this.state.isLoadingH ? (
        <View
          style={{
            // flex: 1,
            justifyContent: 'center',

            padding: 100,
            alignContent: 'center',
          }}>
          <ActivityIndicator
            animating={this.state.isLoading || this.state.isLoadingH}
          />
          <Text style={{textAlign: 'center', fontWeight: 'bold'}}>
            Loading..
          </Text>
        </View>
      ) : (
        <FlatList
          data={this.state.data}
          renderItem={item => (
            <List
              navigate={url =>
                this.props.navigation.navigate('WebView', {url: url})
              }
              dataArray={item}
            />
          )}></FlatList>
      );

    return (
      <View style={{flex: 1, backgroundColor: '#F2F2F2'}}>
        <Appbar
          navigate={() => this.props.navigation.openDrawer()}
          title="NEWZ APP"
          icon="bars"
        />

        <Navigator />
        <ScrollView>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <HorScroll
              navigate={url =>
                this.props.navigation.navigate('WebView', {url: url})
              }
              change={() => this.setLoadingH()}
            />
            {view}
          </View>
        </ScrollView>
      </View>
    );
  }
}
const style = StyleSheet.create({
  fl: {flex: 1},
  body: {
    borderRadius: 10,
    height: 287,
  },
});
export default HomeScreen;
