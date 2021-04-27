import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 22,
    color: '#111827',
  },
});

function SectionHeading({title}) {
  return (
    <View>
      <Text style={styles.textStyle}>{title}</Text>
    </View>
  );
}

export default SectionHeading;
