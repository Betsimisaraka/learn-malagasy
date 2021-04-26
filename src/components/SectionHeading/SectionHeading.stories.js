import React from 'react';
import {View} from 'react-native';
import {storiesOf} from '@storybook/react-native';

import SectionHeading from './SectionHeading';

storiesOf('SectionHeading', module)
  .addDecorator(story => (
    <View style={{marginTop: 20, marginLeft: 20}}>{story()}</View>
  ))
  .add('select a category', () => (
    <SectionHeading variants="Select a category:" />
  ))
  .add('the phrase in Malagasy', () => (
    <SectionHeading variants="The phrase in Malagasy:" />
  ))
  .add('the phrase in English', () => (
    <SectionHeading variants="The phrase in English:" />
  ))
  .add('seen phrases', () => <SectionHeading variants="Seen phrases:" />)
  .add('pick a solution', () => <SectionHeading variants="Pick a solution:" />)
  .add('the phrase', () => <SectionHeading variants="The phrase:" />)
  .add('learnt phrases', () => <SectionHeading variants="Learnt phrases:" />)
  .add('category', () => <SectionHeading variants="Category:" />);
