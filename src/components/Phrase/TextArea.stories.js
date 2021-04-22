
import React, { useState } from 'react';
import { View } from 'react-native';

import { storiesOf } from '@storybook/react-native';

import Phrase from './TextArea';


storiesOf('Textarea', module)
  .add('Uneditable', () => { 

   return (
      <Phrase 
        multiline={true}
        numberOfLines={4}
        placeholder= {'Question'}
        placeholderTextColor={'#111827'}
        editable={false}
        value={'Anita'}
      />
    )
   })
   
  .add('Editable', () => { 
  function Parent({ children, ...props }) {
    const [state, setState] = useState({value: '000'});
    return <View>{children(state, setState)}</View>;
  }

   return (
     <Parent>
      {(state, setState) => (
          <Phrase 
            multiline={true}
            numberOfLines={4}
            placeholder= {'Question'}
            placeholderTextColor={'#111827'}
            editable={true}
            value={state.value}
            onChange={(text) => setState({ value: text })}
          />
    )}
    </Parent>)}
  )