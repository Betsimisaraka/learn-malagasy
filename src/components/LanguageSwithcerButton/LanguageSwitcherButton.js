import * as React from 'react';
import { Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';

import SwitcherIcon from '../../assets/language-switcher-icon.svg';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#06B6D4',
        borderRadius: 30,
        width: 90,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    switcherText: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 13,
        lineHeight: 16,
        color: '#FFFFFF',
    }
})

function LanguageSwitcherButton({ onPress, buttonText, title }) {

  return (
      <SafeAreaView>
        <TouchableOpacity
            style={styles.container}
            onPress={onPress}
        >
            <Text style={styles.switcherText}>{buttonText}</Text>
              <SwitcherIcon />
            <Text style={styles.switcherText}>{title}</Text>
        </TouchableOpacity>
      </SafeAreaView>
  ) 
}

export default LanguageSwitcherButton;