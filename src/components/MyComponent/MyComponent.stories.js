
import * as React from 'react';
import { View } from 'react-native';

import { storiesOf } from '@storybook/react-native';

import MyComponent from './MyComponent';


storiesOf('MyComponent', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('First name', () => <MyComponent name= {'Anita'}/>)
  .add('Last name', () => <MyComponent name= {'Rasoa'} />)
  .add('Email address', () => <MyComponent email= {'anita.ras@onja.org'} />);
