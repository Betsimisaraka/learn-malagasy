import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';

import Navigation from '../Navigation';
import CategoryList from '../Navigation/CategoryList';

const Home = () => {
  return (
    <ScrollView>
      <Navigation />
      <CategoryList />
    </ScrollView>
  );
};

export default Home;
