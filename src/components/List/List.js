import React, {useEffect} from 'react';
import {StyleSheet, SafeAreaView, SectionList, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {
  setIsShow,
  setIsCorret,
  getCountLearntPhrases,
} from '../../redux/Actions';

import SectionHeading from '../SectionHeading/SectionHeading';
import ListItem from '../ListItem/ListItem';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    paddingBottom: 17,
    paddingTop: 17,
    paddingLeft: 16,
    paddingRight: 20,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#E5E5E5',
  },
  sectionHeading: {
    paddingBottom: 15,
  },
  separator: {
    flex: 1,
    height: 1,
    backgroundColor: '#E5E5E5',
  },
});

const Separator = () => <View style={styles.separator} />;

function List({items, navigation}) {
  const category = useSelector(state => state.categories);
  const answers = useSelector(state => state.answers);
  const isCorrect = useSelector(state => state.isCorrect);
  const phrase = useSelector(state => state.phrase);
  const learntPhrases = useSelector(state => state.learntPhrases);
  const dispatch = useDispatch();

  let text;
  if (items === category) {
    text = 'Select a category:';
  } else if (items === answers) {
    text = 'Pick a solution:';
  }

  function onClick() {
    const findCorrectAnswer = answers.find(
      answer => answer.id === phrase.correctAnswer.id,
    );
    if (findCorrectAnswer === true) {
      dispatch(setIsCorret(true));
      learntPhrases.push(findCorrectAnswer);
      const countPhras = learntPhrases.length;
      dispatch(getCountLearntPhrases(countPhras));
    } else if (!findCorrectAnswer) {
      dispatch(setIsCorret(false));
    } else {
      dispatch(setIsCorret(false));
    }
  }

  return (
    <SafeAreaView>
      <SectionList
        sections={[{title: text, data: items}]}
        renderSectionHeader={({section}) => (
          <SectionHeading title={section.title} />
        )}
        renderItem={({item, index}) => (
          <View style={styles.container}>
            {items === category ? (
              <ListItem
                title={item.name.en}
                onPress={() => navigation.navigate('Learn', {item})}
                buttonText="Learn"
              />
            ) : items === answers ? (
              <ListItem
                title={item.name.en}
                onPress={() => {
                  onClick();
                  dispatch(setIsShow(true));
                }}
                buttonText={
                  !isCorrect
                    ? 'Pick'
                    : isCorrect
                    ? 'Correct'
                    : !isCorrect
                    ? 'Wrong'
                    : 'Pick'
                }
              />
            ) : null}
          </View>
        )}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <Separator />}
      />
    </SafeAreaView>
  );
}

export default List;
