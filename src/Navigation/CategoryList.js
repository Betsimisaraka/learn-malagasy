import React, {useState, useEffect} from 'react';
import {SafeAreaView, KeyboardAvoidingView} from 'react-native';

import List from '../components/List/List';
import useCategoryList from '../util/useCategory';

const CategoryList = () => {
  const {category} = useCategoryList();

  return (
    <SafeAreaView>
      <KeyboardAvoidingView bahavior="padding">
        <List
          item={category}
          onPress={() => alert('Learn more words here')}
          buttonText="Learn"
          category={category}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default CategoryList;
