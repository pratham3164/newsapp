import React from 'react';

import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default function List_item(props) {
  return (
    <View style={style.card}>
      <TouchableOpacity
        onPress={() => props.navigate(props.dataArray.item.url)}>
        <View>
          <Image
            style={style.thumbnail}
            source={{
              uri: props.dataArray.item.urlToImage,
            }}
          />
        </View>
        <View>
          <Text style={style.title} numberOfLines={2}>
            {props.dataArray.item.title}
          </Text>
          <Text style={style.descp} numberOfLines={3}>
            {props.dataArray.item.description}
          </Text>
          <Text style={style.source}>{props.dataArray.item.source.name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  title: {
    width: 200,
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 5,
    marginBottom: 3,
    marginStart: 10,
    fontFamily: 'Roboto',
  },
  descp: {
    width: 220,
    fontSize: 9,
    margin: 10,
    marginBottom: 5,
    marginTop: 2,
  },
  list: {
    elevation: 10,
  },
  thumbnail: {
    alignContent: 'center',
    height: 140,
    width: 240,
    marginBottom: 5,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  source: {
    marginStart: 10,
    alignSelf: 'baseline',
  },
  card: {
    borderRadius: 8,
    margin: 5,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
    height: 250,
  },
});
