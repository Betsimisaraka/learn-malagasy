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
    flexShrink: 1,
  },
});

function ListItem({title, onPress, buttonText, ref}) {
  return (
    <SafeAreaView>
      <TouchableOpacity style={styles.textContainer} onPress={onPress}>
        <Text style={styles.textStyle} numberOfLines={1}>
          {title}
        </Text>
        <ActionButton buttonText={buttonText} onPress={onPress} ref={ref} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default ListItem;
