import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {View} from 'react-native';

import Category from './category';

export default function Bottom1() {
  return (
    <View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{elevation: 2}}>
        <Category category="General" />
        <Category category="Sports" />
        <Category category="Business" />
        <Category category="Entertainment" />
        <Category category="Health" />
        <Category category="Science" />
        <Category category="Technology" />
      </ScrollView>
    </View>
  );
}
