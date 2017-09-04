import { combineReducers } from 'redux';
import popularArticles from './src/reducers/popular_articles_reducer';
import newArticles from './src/reducers/new_articles_reducer';

export default combineReducers({
	popularArticles,
	newArticles
});