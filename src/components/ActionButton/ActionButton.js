import * as React from 'react';
import { Text, StyleSheet, Image, SafeAreaView, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 19,
        textAlign: 'right',
    },
    blueButtonText: {
        marginRight: 10,
        color: '#06B6D4',
    },
    correctButtonText: {
         marginRight: 10,
        color: '#06D440',
    },
    wrongButtonText: {
         marginRight: 10,
        color: '#D4068E',
    },
})

function ActionButton({ onPress, buttonText }) {
    let image;
    let style;
    
    if(buttonText === 'Learn') {
        style = styles.blueButtonText;
        image = require('../../assets/learn-icon.png');
    } else if (buttonText === 'Pick') {
         style = styles.blueButtonText;
         image = require('../../assets/learn-icon.png');
    } else if (buttonText === 'Correct') {
         style = styles.correctButtonText;
         image = require('../../assets/correct-icon.png');
    } else if (buttonText === 'Wrong') {
         style = styles.wrongButtonText;
         image = require('../../assets/wrong-icon.png');
    }

  return (
      <SafeAreaView>
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={style}>{buttonText} </Text>
            <Image 
                source={image}
                resizeMode='contain'
            />
        </TouchableOpacity>
      </SafeAreaView>
  ) 
}

export default ActionButton;