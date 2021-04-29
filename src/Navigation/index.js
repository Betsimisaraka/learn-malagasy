import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import ToolButton from '../components/ToolButton/ToolButton';
import LanguageSwitcherButton from '../components/LanguageSwithcerButton/LanguageSwitcherButton';

import Add from '../assets/add.svg';
import Seen from '../assets/seen.svg';
import Learnt from '../assets/learnt.svg';
import Back from '../assets/back.svg';
import Nightmode from '../assets/night-mode.svg';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 35,
    paddingBottom: 56,
    justifyContent: 'space-between',
    width: 300,
  },
});

const Menu = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ToolButton>
        <Add />
      </ToolButton>
      <LanguageSwitcherButton />
      <ToolButton>
        <Seen />
      </ToolButton>
      <ToolButton>
        <Learnt />
      </ToolButton>
      <ToolButton>
        <Nightmode />
      </ToolButton>
    </SafeAreaView>
  );
};

export default Menu;
