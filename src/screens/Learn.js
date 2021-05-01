import React from 'react';
import {SafeAreaView, Text} from 'react-native';

import LearnButton from '../container/LearnButton';

const Learn = ({navigation, route}) => {
  const {item} = route.params;

  return (
    <SafeAreaView>
      <LearnButton navigation={navigation} />
      <Text>Category: {item.name.en}</Text>
    </SafeAreaView>
  );
};

export default Learn;
