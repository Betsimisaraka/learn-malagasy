import {useEffect, useState} from 'react';

const categoriesData = require('../data/categories.json');

function useCategoryList() {
  const [category, setCategory] = useState([]);
  const [phrase, setPhrase] = useState([]);

  const lang = {
    en: 'EN',
    ma: 'Ma',
  };

  useEffect(() => {
    function getCategory() {
      const categories = categoriesData.categories;
      setCategory(categories);
    }
    getCategory();
  }, []);

  return {
    category,
    lang,
    phrase,
    setPhrase,
  };
}

export default useCategoryList;
