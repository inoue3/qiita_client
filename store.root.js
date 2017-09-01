import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import { createLogger } from 'redux-logger';
import rootReducer from './reducer.root';

export default (initialState = undefined) => {
  const logger = createLogger();
  const enhancer = applyMiddleware(thunk, promise, logger);
  return createStore(rootReducer, initialState, enhancer);
}