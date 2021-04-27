import React from 'react';
import {View} from 'react-native';
import {storiesOf} from '@storybook/react-native';

import SectionHeading from './SectionHeading';

storiesOf('SectionHeading', module)
  .addDecorator(story => (
    <View style={{marginTop: 20, marginLeft: 20}}>{story()}</View>
  ))
  .add('select a category', () => <SectionHeading title="Select a category:" />)
  .add('the phrase in Malagasy', () => (
    <SectionHeading title="The phrase in Malagasy:" />
  ))
  .add('the phrase in English', () => (
    <SectionHeading title="The phrase in English:" />
  ))
  .add('seen phrases', () => <SectionHeading title="Seen phrases:" />)
  .add('pick a solution', () => <SectionHeading title="Pick a solution:" />)
  .add('the phrase', () => <SectionHeading title="The phrase:" />)
  .add('learnt phrases', () => <SectionHeading title="Learnt phrases:" />)
  .add('category', () => <SectionHeading title="Category:" />);
