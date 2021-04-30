import React from 'react';
import {SafeAreaView, Text} from 'react-native';

import LearnButton from '../container/LearnButton';

const Learn = ({navigation}) => {
  return (
    <SafeAreaView>
      <LearnButton navigation={navigation} />
      <Text>Hello learn screen</Text>
    </SafeAreaView>
  );
};

export default Learn;
