import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#06B6D4',
        borderRadius: 100,
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    }
})

export default function ToolButton({ onPress, children }) {
  return <TouchableOpacity style={styles.container} onPress={onPress}>{children}</TouchableOpacity>;
}