import { combineReducers } from 'redux';
import favoredArticles from './src/components/favored_articles/reducer';

export default combineReducers({
  favoredArticles,
});