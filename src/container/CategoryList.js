import React, {useState, useEffect} from 'react';
import {SafeAreaView, KeyboardAvoidingView} from 'react-native';

import List from '../components/List/List';
import useCategoryList from '../util/useCategory';

const CategoryList = ({navigation}) => {
  const {category} = useCategoryList();

  return (
    <SafeAreaView>
      <KeyboardAvoidingView bahavior="padding">
        <List
          item={category}
          navigation={navigation}
          buttonText="Learn"
          category={category}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default CategoryList;
