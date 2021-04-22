// components/Task.js
import * as React from 'react';
import { SafeAreaView, TextInput, StyleSheet} from 'react-native';
// import { styles } from '../constants/globalStyles';

const styles = StyleSheet.create({
  textAreaContainer: {
    backgroundColor: '#FFFFFF',
    marginLeft: 23,
    marginRight: 23,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 3,
  },
  textArea: {
    alignSelf: 'center',
  }
})

export default function Phrase({placeholder, multiline, numberOfLines, placeholderTextColor, editable, value, onChange}) {
  
  return (
    <SafeAreaView style={styles.textAreaContainer}>
      <TextInput 
        placeholder={placeholder} 
        placeholderTextColor={placeholderTextColor}
        multiline={multiline} 
        numberOfLines={numberOfLines}
        editable={editable}
        value={value}
        onChange={onChange}
      />
    </SafeAreaView>
  );
}