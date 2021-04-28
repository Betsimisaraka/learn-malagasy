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
      category={category}
    />
  );
}

function PickSolution() {
  const [solution, setSolution] = useState([]);

  const obj = [
    {id: 1, name: {en: 'zero', mg: 'zirao'}},
    {id: 2, name: {en: 'two', mg: 'roa'}},
    {id: 3, name: {en: 'nine', mg: 'sivy'}},
    {id: 4, name: {en: 'ten', mg: 'folo'}},
  ];

  useEffect(() => {
    function getCategory() {
      setSolution(obj);
    }
    getCategory();
  }, []);

  return (
    <List
      item={solution}
      onPress={() => alert('Pick a solution')}
      buttonText="Pick"
    />
  );
}

storiesOf('List', module)
  .addDecorator(story => <View style={{margin: 20}}>{story()}</View>)
  .add('learn', () => <GetList />)
  .add('pick', () => <PickSolution />);
