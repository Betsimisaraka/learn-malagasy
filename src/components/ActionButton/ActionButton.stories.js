import * as React from 'react';
import { View, Text } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

import ActionButton from './ActionButton';

storiesOf('ActionButton', module)
  .addDecorator((story) => <View>{story()}</View>)
  .add('learn', () => (
    <ActionButton
        buttonText='Learn' 
        onPress={action('Learn more words here')} 
        />
  ))
  .add('pick', () => (
    <ActionButton 
        buttonText='Pick'
        onPress={action('Pick a new words')} />
  ))
  .add('correct', () => (
    <ActionButton 
        buttonText={'Correct'}
        onPress={action('Well done')} />
  ))
  .add('wrong', () => (
    <ActionButton 
        buttonText={'Wrong'}
        onPress={action('You have picked the wrong answer')} />
  ));



// storiesOf('ActionButton', module)
//   .addDecorator(story => <View style={{padding: 23}}>{story()}</View>)
//   .add('learn', () => 
//     <ActionButton 
//         title={'Learn'} 
//         onPress={() => alert('Learn more words here')}
//         buttonColor={'#D4068E'} 
//     />)
//   .add('pick', () => (
//     <ActionButton 
//         title={'Pick'} 
//         onPress={() => alert('Pick a new words')} 
//         buttonColor={'#D4068E'}
//     />
//   ))
//   .add('correct', () => (
//     <ActionButton 
//         title={'Correct'} 
//         onPress={() => alert('Well done')} 
//     />
//   ))
//   .add('wrong', () => (
//     <ActionButton 
//         title={'Wrong'} 
//         onPress={() => alert('You have picked the wrong answer')} 
//     />
//   ));
