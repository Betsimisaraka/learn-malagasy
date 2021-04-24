import * as React from 'react';
import { Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';

import Learn from '../../assets/learn-icon.svg';
import Correct from '../../assets/correct-icon.svg';
import Wrong from '../../assets/wrong-icon.svg';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 19,
        marginTop: 20,
    },
    buttonText: {
        marginRight: 10,
    },
    blueButtonText: {
        color: '#06B6D4',
    },
    correctButtonText: {
        color: '#06D440',
    },
    wrongButtonText: {
        color: '#D4068E',
    },
})

function ActionButton({ onPress, buttonText }) {
    let style;
    
    if(buttonText === 'Learn') {
        style = styles.blueButtonText;
    } else if (buttonText === 'Pick') {
         style = styles.blueButtonText;
    } else if (buttonText === 'Correct') {
         style = styles.correctButtonText;
    } else if (buttonText === 'Wrong') {
         style = styles.wrongButtonText;
    }

  return (
      <SafeAreaView>
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={[style, styles.buttonText]}>{buttonText} </Text>
            {buttonText === 'Learn' || buttonText === 'Pick' 
                ? <Learn /> 
                : buttonText === 'Correct' 
                ? <Correct /> 
                : <Wrong />
            }
        </TouchableOpacity>
      </SafeAreaView>
  ) 
}

export default ActionButton;