import * as React from 'react';
import { Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';

// const styles = StyleSheet.create({
// })

function NextButton({ onPress, buttonText }) {
  return (
      <SafeAreaView>
        <TouchableOpacity onPress={onPress}>
            <Text>{buttonText} </Text>
        </TouchableOpacity>
      </SafeAreaView>
  ) 
}

export default NextButton;