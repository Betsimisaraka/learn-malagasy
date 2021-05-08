export const getCategoryList = categoryList => ({
  type: 'GET_CATEGORY_LIST',
  payload: categoryList,
});

export const getLang = () => ({type: 'GET_LANG'});

export const getPhrase = phrase => ({
  type: 'GET_PHRASE',
  payload: phrase,
});

export const getSeenPhrases = () => ({
  type: 'GET_SEEN_PHRASES',
});

export const getCountSeenPhrases = count => ({
  type: 'COUNT_SEEN_PHRASES',
  payload: count,
});

export const getLearntPhrases = () => ({
  type: 'GET_LEARNT_PHRASES',
});

export const getCountLearntPhrases = countLearnt => ({
  type: 'COUNT_LEARNT_PHRASES',
  payload: countLearnt,
});

export const getAnswers = answer => ({
  type: 'GET_ANSWERS',
  payload: answer,
});

export const setIsCorret = boolean => ({
  type: 'SET_IS_CORRECT',
  payload: boolean,
});

export const setIsShow = boolean => ({
  type: 'SET_IS_SHOW',
  payload: boolean,
});
