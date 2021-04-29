import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text} from 'react-native';
import Menu from './src/Navigation';
import Home from './src/screens/Home';

import CategoryListStack from './src/util/Navigation';

const styles = StyleSheet.create({
  container: {
    marginLeft: 23,
    marginRight: 23,
  },
});

export default () => {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Home />
        {/* <CategoryListStack /> */}
      </SafeAreaView>
    </ScrollView>
  );
};
