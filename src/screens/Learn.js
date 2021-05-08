import React, {useEffect} from 'react';
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import LearnButton from '../container/LearnButton';
import SectionHeading from '../components/SectionHeading/SectionHeading';
import PhraseTextArea from '../components/PhraseTextArea/PhraseTextArea';
import List from '../components/List/List';
import {
  getPhrase,
  getAnswers,
  getCountSeenPhrases,
  setIsShow,
  setIsCorret,
} from '../redux/Actions';
import NextButton from '../components/NextButton/NextButton';

const phrasesData = require('../data/phrases.json');

const styles = StyleSheet.create({
  container: {
    marginLeft: 23,
    marginRight: 23,
  },
  titleStyle: {
    flexDirection: 'row',
    marginBottom: 30,
    marginTop: 66,
  },
  category: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 18,
    lineHeight: 22,
    color: '#111827',
    marginLeft: 10,
  },
});

const Learn = ({navigation, route}) => {
  const phrase = useSelector(state => state.phrase);
  const answers = useSelector(state => state.answers);
  const seenPhrases = useSelector(state => state.seenPhrases);
  const isShow = useSelector(state => state.isShow);
  const dispatch = useDispatch();

  const {item} = route.params;

  function getPhraseData() {
    const getPhrases = phrasesData && phrasesData.phrases;
    const getItem = item.phrasesIds;
    getRandomeAnswer(getPhrases, getItem);
  }

  function getRandomeAnswer(phrase, item) {
    const random = item[Math.floor(Math.random() * item.length)];
    const random1 = item[Math.floor(Math.random() * item.length)];
    const random2 = item[Math.floor(Math.random() * item.length)];
    const random3 = item[Math.floor(Math.random() * item.length)];

    const findAnswer = phrase && phrase.find(phrase => phrase.id == random);
    const findRandom1 = phrase && phrase.find(phrase => phrase.id == random1);
    const findRandom2 = phrase && phrase.find(phrase => phrase.id == random2);
    const findRandom3 = phrase && phrase.find(phrase => phrase.id == random3);
    const pickAnswers = [findAnswer, findRandom1, findRandom2, findRandom3];
    console.log(pickAnswers);
    const sortedAnswer = pickAnswers.sort(() => {
      return 0.5 - Math.random();
    });
    const obj = {
      question: findAnswer,
      correctAnswer: findAnswer,
    };

    dispatch(getPhrase(obj));
    dispatch(getAnswers(sortedAnswer));
  }

  useEffect(() => {
    getPhraseData();
    seenPhrases.push(phrase.question);
    const numberOfPhrases = seenPhrases.length;
    dispatch(getCountSeenPhrases(numberOfPhrases));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <LearnButton navigation={navigation} />
      <View style={styles.titleStyle}>
        <SectionHeading title="Category:" />
        <Text style={styles.category}>{item.name.en}</Text>
      </View>
      {item.length === 0 ? (
        <View>
          <PhraseTextArea
            editable={false}
            phrase="You have answered all the questions in this category"
          />
          <NextButton
            buttonText="Reshuffle"
            onPress={() => {
              getPhraseData();
            }}
          />
        </View>
      ) : (
        <View>
          <SectionHeading title="The phrase:" />
          <PhraseTextArea editable={false} phrase={phrase.question.name.mg} />
          <List items={answers && answers} navigation={navigation} />
          {isShow && (
            <NextButton
              buttonText="Next"
              onPress={() => {
                getPhraseData();
                dispatch(setIsCorret(false));
                dispatch(setIsShow(false));
              }}
            />
          )}
        </View>
      )}
    </SafeAreaView>
  );
};

export default Learn;
