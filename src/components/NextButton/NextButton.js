import * as React from 'react';
import {Text, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  containerStyle: {
    alignItems: 'center',
  },
  container: {
    borderRadius: 30,
    marginTop: 20,
  },
  buttonContainer: {
    width: 90,
    height: 40,
    backgroundColor: '#06B6D4',
  },
  disabledButtonContainer: {
    width: 90,
    height: 40,
    borderWidth: 1,
    borderColor: '#06B6D4',
    backgroundColor: 'transparent',
  },
  reshuffleContainer: {
    backgroundColor: '#06B6D4',
    width: 100,
    height: 40,
  },
  buttonText: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
    paddingVertical: 11,
  },
  reshuffleButtonText: {
    color: '#FFFFFF',
    paddingHorizontal: 13,
  },
  nextAddButtonText: {
    paddingHorizontal: 27,
  },
  notDisabledButtonText: {
    color: '#FFFFFF',
  },
  disabledButtonText: {
    color: '#06B6D4',
  },
});

function NextButton({onPress, buttonText, disabled}) {
  let textStyle;
  let containerStyle;

  if (buttonText === 'Next' || (buttonText === 'Add' && !disabled)) {
    textStyle = styles.notDisabledButtonText;
    containerStyle = styles.buttonContainer;
  } else if (buttonText === 'Reshuffle') {
    textStyle = styles.reshuffleButtonText;
    containerStyle = styles.reshuffleContainer;
  } else if (disabled) {
    textStyle = styles.disabledButtonText;
    containerStyle = styles.disabledButtonContainer;
  }

  return (
    <SafeAreaView style={styles.containerStyle}>
      <TouchableOpacity
        style={[containerStyle, styles.container]}
        disabled={disabled}
        onPress={() => alert('Next question')}>
        <Text style={[textStyle, styles.buttonText]}>{buttonText} </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default NextButton;
