import * as React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

import NextButton from './NextButton';

storiesOf('NextButton', module)
  .addDecorator((story) => <View>{story()}</View>)
  .add('next', () => (
    <NextButton
        buttonText='Next' 
        onPress={action('next question')} 
        />
  ))
  .add('add', () => (
    <NextButton 
        buttonText='Add'
        onPress={action('Add a question')} />
  ))
  .add('correct', () => (
    <NextButton 
        buttonText={'Reshuffle'}
        onPress={action('')} />
  ))
  .add('Disable', () => (
    <NextButton 
        buttonText={'Add'}
        onPress={action('You can not click')} />
  ));