import React from 'react';
import {Text, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import ActionButton from '../ActionButton/ActionButton';

const styles = StyleSheet.create({
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
    marginTop: 20,
  },
});

function ListItem({title, onPress, buttonText}) {
  return (
    <SafeAreaView>
      <TouchableOpacity style={styles.textContainer} onPress={onPress}>
        <Text style={styles.textStyle}>{title}</Text>
        <ActionButton buttonText={buttonText} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default ListItem;
