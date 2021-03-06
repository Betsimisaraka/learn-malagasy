import React, {useEffect} from 'react';
import {SafeAreaView, KeyboardAvoidingView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import List from '../components/List/List';
import {getCategoryList} from '../redux/Redux';

const categoriesData = require('../data/categories.json');

const CategoryList = ({navigation}) => {
  const category = useSelector(state => state.categories);

  const dispatch = useDispatch();

  useEffect(() => {
    const categories = categoriesData.categories;
    dispatch(getCategoryList(categories));
  }, []);

  return (
    <SafeAreaView>
      <KeyboardAvoidingView bahavior="padding">
        <List items={category} navigation={navigation} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default CategoryList;
