import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import HomeButton from '../container/HomeButton';
import CategoryList from '../container/CategoryList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 23,
    marginRight: 23,
  },
});
// I like the cleanness of this
// HomeButton implies only one button being passed when in reality it is more
const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <HomeButton />
      <CategoryList navigation={navigation} />
    </SafeAreaView>
  );
};

export default Home;
