import {createStore} from 'redux';

const initialState = {
  categories: [],
  lang: {
    en: 'EN',
    ma: 'Ma',
  },
  phrase: [],
  correctAnswer: '',
  question: '',
  answers: [],
  seenPhrases: [],
  countSeenPhrase: 0,
  learntPhrases: [],
  countLearntPhrases: 0,
  isCorrect: false,
  isShow: false,
  noPhrases: false,
};

const categoryListReducer = (state = initialState, action) => {
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
        seenPhrases: state.seenPhrases,
      };
    case 'COUNT_SEEN_PHRASES':
      return {
        ...state,
        countSeenPhrases: action.payload,
      };
    case 'GET_LEARNT_PHRASES':
      return {
        ...state,
        learntPhrases: state.learntPhrases,
      };
    case 'COUNT_LEARNT_PHRASES':
      return {
        ...state,
        countLearntPhrases: action.payload,
      };
    case 'SET_IS_SHOW':
      return {...state, isShow: action.payload};
    case 'SET_IS_CORRECT':
      return {...state, isCorrect: action.payload};
    default:
      return state;
  }
};

const store = createStore(categoryListReducer);

export default store;
