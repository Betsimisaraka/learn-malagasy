import * as React from 'react';
import {View} from 'react-native';
import {storiesOf} from '@storybook/react-native';

import ListItem from './ListItem';

storiesOf('ListItem', module)
  .addDecorator(story => <View style={{marginTop: 20}}>{story()}</View>)
  .add('learn', () => (
    <ListItem
      title="All"
      onPress={() => alert('Learn more words here')}
      buttonText="Learn"
    />
  ))
  .add('pick', () => (
    <ListItem
      title="All"
      onPress={() => alert('Pick a new words')}
      buttonText="Pick"
    />
  ))
  .add('more text', () => (
    <ListItem
      title="An unncessessarly loooong cat more text that is wraping by itself I like its"
      onPress={() => alert('Pick a new words')}
      buttonText="Pick"
    />
  ));
