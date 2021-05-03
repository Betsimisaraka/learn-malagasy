import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';

import LearnButton from '../container/LearnButton';
import SectionHeading from '../components/SectionHeading/SectionHeading';
import PhraseTextArea from '../components/PhraseTextArea/PhraseTextArea';
import useCategoryList from '../util/useCategory';
import List from '../components/List/List';
// import List from '../components/List/List';

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
  const [isCorrect, setIsCorrect] = useState(false);
  const [question, setQuestion] = useState('');
  const [answers, setAnswers] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const {phrase, setPhrase} = useCategoryList();
  const {item} = route.params;

  function getPhrase() {
    const getPhrases = phrasesData.phrases;
    getRandomeAnswer(getPhrases);
  }

  function getRandomeAnswer(phrase) {
    // setPhrase(phrase);
    const random =
      item.phrasesIds[Math.floor(Math.random() * item.phrasesIds.length)];
    const random1 =
      item.phrasesIds[Math.floor(Math.random() * item.phrasesIds.length)];
    const random2 =
      item.phrasesIds[Math.floor(Math.random() * item.phrasesIds.length)];
    const random3 =
      item.phrasesIds[Math.floor(Math.random() * item.phrasesIds.length)];
    const findAnswer = phrase.find(phrase => phrase.id === random);
    const findRandom1 = phrase.find(phrase => phrase.id === random1);
    const findRandom2 = phrase.find(phrase => phrase.id === random2);
    const findRandom3 = phrase.find(phrase => phrase.id === random3);
    const pickAnswers = [findAnswer, findRandom1, findRandom2, findRandom3];
    console.log(pickAnswers);

    const sortedAnswer = pickAnswers.sort(() => {
      return 0.5 - Math.random();
    });

    const obj = {
      question: findAnswer.name.mg,
      correctAnswer: findAnswer.name.en,
    };

    setPhrase(obj);
    // setQuestion(findAnswer.name.mg);
    // setCorrectAnswer(findAnswer.name.en);
    setAnswers(sortedAnswer);
  }

  useEffect(() => {
    getPhrase();
  }, []);

  // console.log(phrase);

  return (
    <SafeAreaView style={styles.container}>
      <LearnButton navigation={navigation} />
      <View style={styles.titleStyle}>
        <SectionHeading title="Category:" />
        <Text style={styles.category}>{item.name.en}</Text>
      </View>
      <SectionHeading title="The phrase:" />
      <PhraseTextArea editable={false} phrase={phrase.question} />
      <List
        item={answers}
        // navigation={navigation}
        buttonText="Pick"
        category={answers}
      />
    </SafeAreaView>
  );
};

export default Learn;
