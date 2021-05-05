import React from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/Redux';

import CategoryListStack from './src/Navigation/Navigation';

export default () => {
  return (
    <Provider store={store}>
      <CategoryListStack />
    </Provider>
  );
};
