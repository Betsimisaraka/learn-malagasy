// components/Task.js
import * as React from 'react';
import { Text, SafeAreaView } from 'react-native';
// import { styles } from '../constants/globalStyles';

export default function MyComponent({name, email}) {

  return (
    <SafeAreaView >
      <Text style={{ fontSize: 16, color: 'red', textAlign: 'center'}}>{name}</Text>
      <Text style={{ fontSize: 16, color: 'red', textAlign: 'center'}}>{name}</Text>
      <Text style={{ fontSize: 16, color: 'red', textAlign: 'center'}}>{email}</Text>
    </SafeAreaView>
  );
}