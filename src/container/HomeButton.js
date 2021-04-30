import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import ToolButton from '../components/ToolButton/ToolButton';
import LanguageSwitcherButton from '../components/LanguageSwithcerButton/LanguageSwitcherButton';

import Add from '../assets/add.svg';
import Seen from '../assets/seen.svg';
import Learnt from '../assets/learnt.svg';
import Nightmode from '../assets/night-mode.svg';
import useCategoryList from '../util/useCategory';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 35,
    paddingBottom: 56,
    justifyContent: 'space-between',
    width: 300,
  },
});

const HomeButton = () => {
  const {lang} = useCategoryList();

  return (
    <SafeAreaView style={styles.container}>
      <ToolButton onPress={() => alert('add new item')}>
        <Add />
      </ToolButton>
      <LanguageSwitcherButton
        title={lang.ma}
        buttonText={lang.en}
        onPress={() => alert('Switch language')}
      />
      <ToolButton onPress={() => alert('seen phrases')}>
        <Seen />
      </ToolButton>
      <ToolButton onPress={() => alert('learnt phrases')}>
        <Learnt />
      </ToolButton>
      <ToolButton onPress={() => alert('night mode')}>
        <Nightmode />
      </ToolButton>
    </SafeAreaView>
  );
};

export default HomeButton;
