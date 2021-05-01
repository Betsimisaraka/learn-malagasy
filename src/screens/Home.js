import React, {useEffect} from 'react';
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

const Home = ({navigation}) => {
  // useEffect(() => {
  //   const unsubscribe = navigation.addListener('focus', () => {
  //     console.log('Refreshed!');
  //   });
  //   return unsubscribe;
  // }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <HomeButton />
      <CategoryList navigation={navigation} />
    </SafeAreaView>
  );
};

export default Home;
