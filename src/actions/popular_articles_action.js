import { createActions } from 'redux-actions'
import axios from 'axios';
import { parseString } from 'react-native-xml2js';
import { actions } from '../../type.root';

export const fetchPopularArticles = param => (dispatch) => {
	return axios.get('https://qiita.com/popular-items/feed')
		.then(response => {
			let data = undefined;
			parseString(response.data, (err, obj) => (data = obj));
			return data.feed.entry;
		})
		.then(data => dispatch(actions.getPopularArticles(data)))
		.catch(err => console.warn(err));
};