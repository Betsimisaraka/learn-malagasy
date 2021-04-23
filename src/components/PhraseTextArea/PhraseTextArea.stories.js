import * as React from 'react';
import {View} from 'react-native';
import {storiesOf} from '@storybook/react-native';

import PhraseTextarea from './PhraseTextArea';

function Edit() {
  const [text, setText] = React.useState('');

  return (
    <PhraseTextarea
      phrase={text}
      editable={true}
      onChange={input => setText(input)}
    />
  );
}

storiesOf('PhraseTextarea', module)
  .addDecorator(story => <View style={{padding: 23}}>{story()}</View>)
  .add('editable input', () => <Edit />)
  .add('uneditable phrase', () => (
    <PhraseTextarea phrase={"roa ambin'ny folo"} editable={false} />
  ))
  .add('uneditable and longer', () => (
    <PhraseTextarea
      phrase={
        'You have answered all the questions in this category'
      }
      editable={false}
    />
  ));