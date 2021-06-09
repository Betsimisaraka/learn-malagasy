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
    }
})

function ToolButton({ onPress, children }) { // children should be renamed in a more descriptive way 
  return <TouchableOpacity style={styles.container} onPress={onPress}>{children}</TouchableOpacity>;
}

export default ToolButton;