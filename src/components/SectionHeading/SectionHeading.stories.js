import React from 'react';
import {View} from 'react-native';
import {storiesOf} from '@storybook/react-native';

import SectionHeading from './SectionHeading';

storiesOf('SectionHeading', module)
  .addDecorator(story => (
    <View style={{marginTop: 20, marginLeft: 20}}>{story()}</View>
  ))
  .add('select a category', () => (
    <SectionHeading variants="Select a category" />
  ))
  .add('seen phrases', () => <SectionHeading variants="Seen phrases" />);
