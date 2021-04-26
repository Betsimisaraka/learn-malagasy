import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Text, View } from 'react-native';

import ToolButton from './ToolButton';
import Add from '../../assets/add.svg';
import Seen from '../../assets/seen.svg';
import Learnt from '../../assets/learnt.svg';
import Back from '../../assets/back.svg';
import Nightmode from '../../assets/night-mode.svg';

storiesOf('ToolButton', module)
  .addDecorator((story) => <View style={{ marginTop: 20, alignItems: 'center' }}>{story()}</View>)
  .add('add', () => (
    <ToolButton onPress={() => alert('Add')}>
      <Add />
    </ToolButton>
  ))
  .add('seen', () => (
    <ToolButton onPress={() => alert('Seen')}>
      <Seen />
    </ToolButton>
  ))
  .add('learnt', () => (
    <ToolButton onPress={() => alert('Learnt')}>
      <Learnt />
    </ToolButton>
  ))
  .add('back', () => (
    <ToolButton onPress={() => alert('Back')}>
      <Back />
    </ToolButton>
  ))
  .add('nightmode', () => (
    <ToolButton onPress={() => alert('Nightmode')}>
      <Nightmode />
    </ToolButton>
  ));
