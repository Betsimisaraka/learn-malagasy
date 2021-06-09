import {createStore} from 'redux';

const initialState = {
  categories: [],
  lang: {
    en: 'EN',
    ma: 'Ma',
  },
  phrase: [],
  seenPhrases: [],
  answers: [],
  countSeenPhrase: 0,
};

export const getCategoryList = categoryList => ({
  type: 'GET_CATEGORY_LIST',
  payload: categoryList,
});

export const getLang = () => ({type: 'GET_LANG'});

export const getPhrase = phrase => ({
  type: 'GET_PHRASE',
  payload: phrase,
});

export const getSeenPhrases = seenPhrase => ({
  type: 'GET_SEEN_PHRASES',
  payload: seenPhrase,
});

export const getCountSeenPhrases = count => ({
  type: 'COUNT_SEEN_PHRASES',
  payload: count,
});

export const getAnswers = answer => ({
  type: 'GET_ANSWERS',
  payload: answer,
});

const categoryListReducer = (state = initialState, action) => { // not all of this is related to a categoryList
  switch (action.type) {
    case 'GET_CATEGORY_LIST':
      return {...state, categories: action.payload};
    case 'GET_LANG':
      return {...state, lang: state};
    case 'GET_PHRASE':
      return {...state, phrase: action.payload};
    case 'GET_ANSWERS':
      return {...state, answers: action.payload};
    case 'GET_SEEN_PHRASES':
      return {
        ...state,
        seenPhrases: action.payload,
      };
    case 'COUNT_SEEN_PHRASES':
      return {
        ...state,
        countSeenPhrases: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(categoryListReducer);

export default store;
