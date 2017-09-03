import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducer.root';

export default (initialState = undefined) => {
  const logger = createLogger();
  const enhancer = applyMiddleware(thunk, logger);
  return createStore(rootReducer, initialState, enhancer);
}