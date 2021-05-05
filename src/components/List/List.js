import React from 'react';
import {StyleSheet, SafeAreaView, SectionList, View} from 'react-native';
import {useSelector} from 'react-redux';

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

  let text;
  if (items === category) {
    text = 'Select a category:';
  } else if (items === answers) {
    text = 'Pick a solution:';
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
                onPress={() => alert('Pick a solution')}
                buttonText="Pick"
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
