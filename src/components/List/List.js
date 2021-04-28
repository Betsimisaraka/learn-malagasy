import React from 'react';
import {StyleSheet, SafeAreaView, SectionList, View} from 'react-native';

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
    // borderRadius: 3,
    // borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  firstChild: {
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    paddingBottom: 17,
    paddingTop: 17,
    paddingLeft: 16,
    paddingRight: 20,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderColor: '#E5E5E5',
    marginTop: 15,
  },
  lastChild: {
    backgroundColor: '#FFFFFF',
    paddingBottom: 17,
    paddingTop: 17,
    paddingLeft: 16,
    paddingRight: 20,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
    borderColor: '#E5E5E5',
    borderBottomWidth: 1,
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

function List({item, onPress, buttonText}) {
  return (
    <SafeAreaView>
      <SectionList
        sections={[{title: 'Select a category:', data: item}]}
        renderSectionHeader={({section}) => (
          <SectionHeading title={section.title} />
        )}
        renderItem={({item, index}) => (
          <View
            style={
              index === 0
                ? styles.firstChild
                : index == item.length - 1
                ? styles.lastChild
                : styles.container
            }>
            <ListItem
              title={item.name.en}
              onPress={onPress}
              buttonText={buttonText}
            />
          </View>
        )}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <Separator />}
      />
    </SafeAreaView>
  );
}

export default List;
