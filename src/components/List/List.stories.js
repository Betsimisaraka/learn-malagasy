import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {storiesOf} from '@storybook/react-native';

const categoriesData = require('../../data/categories.json');

import List from './List';

function GetList() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    function getCategory() {
      const categories = categoriesData.categories;
      setCategory(categories);
    }
    getCategory();
  }, []);

  return (
    <List
      item={category}
      onPress={() => alert('Learn more words here')}
      buttonText="Learn"
    />
  );
}

storiesOf('List', module)
  .addDecorator(story => <View style={{margin: 20}}>{story()}</View>)
  .add('learn', () => <GetList />);
