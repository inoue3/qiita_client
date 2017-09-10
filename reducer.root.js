import { combineReducers } from 'redux';
import popularArticles from './src/reducers/popular_articles_reducer';
import newArticles from './src/reducers/new_articles_reducer';
import search from './src/reducers/search_reducer';

export default combineReducers({
	popularArticles,
	newArticles,
	search,
});