import { createActions } from 'redux-actions'
import axios from 'axios';
import { parseString } from 'react-native-xml2js';
import Types from '../../../type.root';

export const { getFavoredArticles } = createActions(Types.GET_FAVORED_ARTICLES);

export const fetchData = (dispatch) => {
	return axios.get('https://qiita.com/popular-items/feed')
		.then(response => {
			let data = undefined;
			parseString(response.data, (err, obj) => (data = obj));
			return data.feed.entry;
		})
		.then(data => dispatch(getFavoredArticles(data)))
		.catch(err => console.warn(err));
}