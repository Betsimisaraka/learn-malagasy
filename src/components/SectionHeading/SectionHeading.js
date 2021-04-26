import React from 'react';
import {Text, StyleSheet, SafeAreaView} from 'react-native';

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 22,
    color: '#111827',
  },
});

function SectionHeading({variants}) {
  return (
    <SafeAreaView>
      <Text style={styles.textStyle}>{variants}</Text>
    </SafeAreaView>
  );
}

export default SectionHeading;
