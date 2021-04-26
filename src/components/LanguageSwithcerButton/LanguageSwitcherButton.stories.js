import * as React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';

import LanguageSwitcherButton from './LanguageSwitcherButton';

storiesOf('LanguageSwitcherButton', module)
  .addDecorator((story) => <View style={{ marginTop: 20 }}>{story()}</View>)
  .add('English', () => (
    <LanguageSwitcherButton 
        buttonText='En'
        title='Ma'
        onPress={() => alert('Switch into English')}
    />
  ))
  .add('Malagasy', () => (
    <LanguageSwitcherButton 
        buttonText='Ma'
        title='En'
        onPress={() => alert('Switch into Malagasy')}
    />
  ));