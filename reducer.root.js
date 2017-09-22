import { combineReducers } from 'redux';
import auth from './src/reducers/auth_reducer';
import popularArticles from './src/reducers/popular_articles_reducer';
import newArticles from './src/reducers/new_articles_reducer';
import search from './src/reducers/search_reducer';

export default combineReducers({
	auth,
	popularArticles,
	newArticles,
	search,
});