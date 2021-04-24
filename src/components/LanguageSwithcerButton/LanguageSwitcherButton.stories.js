import * as React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';

import LanguageSwitcherButton from './LanguageSwitcherButton';

function SwitchEn() {
    const [enLang, setEnLang] = React.useState('En');
    const [maLang, setMaLang] = React.useState('Ma');
    return (
        <LanguageSwitcherButton 
            buttonText={enLang ? enLang : maLang}
            title={`${maLang ? maLang : enLang}`}
            onPress={() => setEnLang(maLang)}
        />
    )
}

function SwitchMa() {
    const [enLang, setEnLang] = React.useState('En');
    const [maLang, setMaLang] = React.useState('Ma');
    return (
        <LanguageSwitcherButton 
            title={`${maLang}`}
            buttonText={`${enLang}`}
            onPress={() => setMaLang(enLang)}
        />
    )
}


storiesOf('LanguageSwitcherButton', module)
  .addDecorator((story) => <View style={{ marginTop: 20 }}>{story()}</View>)
  .add('English', () => (
    <SwitchEn />
  ))
  .add('Malagasy', () => (
    <SwitchMa />
  ));