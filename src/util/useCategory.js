import {useEffect, useState} from 'react';

const categoriesData = require('../data/categories.json');

function useCategoryList() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    function getCategory() {
      const categories = categoriesData.categories;
      setCategory(categories);
    }
    getCategory();
  }, []);

  return {
    category,
  };
}

export default useCategoryList;
