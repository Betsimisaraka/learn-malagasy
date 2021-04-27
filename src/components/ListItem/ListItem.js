import React from 'react';
import {Text, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import ActionButton from '../ActionButton/ActionButton';

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textStyle: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 19,
    color: '#111827',
  },
});

function ListItem({title, onPress, buttonText}) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.textContainer} onPress={onPress}>
        <Text style={styles.textStyle}>{title}</Text>
        <ActionButton buttonText={buttonText} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default ListItem;
