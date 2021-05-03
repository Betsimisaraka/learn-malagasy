import {createStore} from 'redux';

const initialState = {
  categories: [],
  lang: {
    en: 'EN',
    ma: 'Ma',
  },
  phrase: [],
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

const categoryListReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CATEGORY_LIST':
      return {...state, categories: action.payload};
    case 'GET_LANG':
      return {...state, lang: state};
    case 'GET_PHRASE':
      return {...state, phrase: action.payload};
    default:
      return state;
  }
};

const store = createStore(categoryListReducer);

export default store;
