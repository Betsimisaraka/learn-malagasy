import React, {useEffect} from 'react';
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import LearnButton from '../container/LearnButton';
import SectionHeading from '../components/SectionHeading/SectionHeading';
import PhraseTextArea from '../components/PhraseTextArea/PhraseTextArea';
import List from '../components/List/List';
import {
  getPhrase,
  getSeenPhrases,
  getAnswers,
  getCountSeenPhrases,
} from '../redux/Redux';

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
  const seenPhrases = useSelector(state => state.seenPhrases);
  const answers = useSelector(state => state.answers);
  const countSeenPhrases = useSelector(state => state.countSeenPhrases);
  const dispatch = useDispatch();

  const {item} = route.params;

  function getPhraseData() {
    const getPhrases = phrasesData.phrases;
    const getItem = item.phrasesIds;
    getRandomeAnswer(getPhrases, getItem);
  }

  function getRandomeAnswer(phrase, item) {
    const random = item[Math.floor(Math.random() * item.length)];
    const random1 = item[Math.floor(Math.random() * item.length)];
    const random2 = item[Math.floor(Math.random() * item.length)];
    const random3 = item[Math.floor(Math.random() * item.length)];

    const findAnswer = phrase.find(phrase => phrase.id === random);
    const findRandom1 = phrase.find(phrase => phrase.id === random1);
    const findRandom2 = phrase.find(phrase => phrase.id === random2);
    const findRandom3 = phrase.find(phrase => phrase.id === random3);
    const pickAnswers = [findAnswer, findRandom1, findRandom2, findRandom3];

    const sortedAnswer = pickAnswers.sort(() => {
      return 0.5 - Math.random();
    });

    const obj = {
      question: findAnswer.name.mg,
      correctAnswer: findAnswer.name.en,
    };

    dispatch(getPhrase(obj));
    dispatch(getAnswers(sortedAnswer));
  }

  useEffect(() => {
    getPhraseData();
  }, []);

  useEffect(() => {
    const questionPhrase = [phrase.question, ...seenPhrases];
    dispatch(getSeenPhrases(questionPhrase));
  }, []);

  useEffect(() => {
    const numberOfPhrases = seenPhrases.length;
    dispatch(getCountSeenPhrases(numberOfPhrases));
  }, []);

  console.log(countSeenPhrases);

  return (
    <SafeAreaView style={styles.container}>
      <LearnButton navigation={navigation} />
      <View style={styles.titleStyle}>
        <SectionHeading title="Category:" />
        <Text style={styles.category}>{item.name.en}</Text>
      </View>
      <SectionHeading title="The phrase:" />
      <PhraseTextArea editable={false} phrase={phrase.question} />
      <List items={answers} />
    </SafeAreaView>
  );
};

export default Learn;
