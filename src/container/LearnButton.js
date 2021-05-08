import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import ToolButton from '../components/ToolButton/ToolButton';
import LanguageSwitcherButton from '../components/LanguageSwithcerButton/LanguageSwitcherButton';

import Back from '../assets/back.svg';
import Nightmode from '../assets/night-mode.svg';
import {setIsCorret, setIsShow} from '../redux/Actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 35,
    paddingBottom: 56,
    justifyContent: 'space-between',
    width: 200,
  },
});

const LearnButton = ({navigation}) => {
  const lang = useSelector(state => state.lang);
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.container}>
      <ToolButton
        onPress={() => {
          navigation.navigate('Home');
          dispatch(setIsShow(false));
          dispatch(setIsCorret(false));
        }}>
        <Back />
      </ToolButton>
      <ToolButton onPress={() => alert('night mode')}>
        <Nightmode />
      </ToolButton>
      <LanguageSwitcherButton
        title={lang.ma}
        buttonText={lang.en}
        onPress={() => alert('Switch language')}
      />
    </SafeAreaView>
  );
};

export default LearnButton;
