
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
        editable={false}
        value={'roa ambin’ny folo'}
      />
    )
  })
   
  .add('Editable', () => {
  function Parent({ children, ...props }) {
    const [state, setState] = useState({value: ''});
    return <View>{children(state, setState)}</View>;
  }

   return (
     <Parent>
      {(state, setState) => (
          <Phrase 
            multiline={true}
            numberOfLines={4}
            placeholder= {'Enter here'}
            placeholderTextColor={'rgba(17, 24, 39, 0.5)'}
            editable={true}
            value={state.value}
            onChange={(text) => setState({ value: text })}
          />
    )}
    </Parent>)}
  )