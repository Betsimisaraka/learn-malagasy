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
         disabled={false}
        onPress={action('next question')} 
        />
  ))
  .add('add', () => (
    <NextButton 
        buttonText='Add'
        disabled={false}
        onPress={action('Add a question')} />
  ))
  .add('reshuffle', () => (
    <NextButton 
        buttonText='Reshuffle'
        disabled={false}
        onPress={action('Try again')} />
  ))
  .add('Disable', () => (
    <NextButton 
        buttonText={'Add'}
        disabled={true}
        onPress={action('You can not click')} />
  ));