import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';

import reducer from './reducer'
const initStore = (initialState = initialState) => {
  return createStore(
    reducer,
    {},
    composeWithDevTools(applyMiddleware(thunkMiddleware, logger))
  );
};

export default initStore
