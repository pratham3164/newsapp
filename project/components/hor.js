import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  FlatList,
  Alert,
  ActivityIndicator,
  Button,
} from 'react-native';

import List from './list-item';

import {getArticles} from '../config/news';
import {TouchableOpacity} from 'react-native-gesture-handler';

export var b, formatwait, formatdata, c, b1, c1;
export class HorScroll extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,

      data: null,
      isError: false,
    };

    formatwait = () => {
      this.setState({
        isLoading: true,
      });
    };
    formatdata = props => {
      if (1) {
        this.setState({
          isLoading: false,
          data: props,
        });
      }
    };
  }

  onPress = () => this.props.change;

  componentDidMount() {
    getArticles('').then(
      data => {
        // console.log('before formatdata' + formatdata);
        formatdata(data);
        // console.log('inside general in getarticle');
        // console.log(data);
        this.props.change();
      },
      error => Alert.alert(JSON.stringify(error)),
    );
  }
  render() {
    const view = this.state.isLoading ? (
      <Text> </Text>
    ) : (
      <View style={style.body}>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={this.state.data}
          renderItem={item => (
            <List navigate={url => this.props.navigate(url)} dataArray={item} />
          )}></FlatList>
      </View>
    );

    return (
      <View style={{flex: 1}}>
        <ScrollView>{view}</ScrollView>
      </View>
    );
  }
}

const style = StyleSheet.create({
  bottom: {
    backgroundColor: 'cornflowerblue',
    borderRadius: 40,
    marginTop: 100,
  },
  fl: {flex: 1},
  body: {
    flex: 1,
    borderRadius: 10,
    height: 270,
  },
  thumbnail: {
    height: 80,
    width: 80,
    margin: 20,
    borderRadius: 5,
  },
  title: {
    padding: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
  },
});
export default HorScroll;
