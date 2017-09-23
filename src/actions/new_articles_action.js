import api from '../api/index';
import { FETCH_NEW_ARTICLES } from '../../type.root'

export const fetchNewArticles = params => (dispatch) => {
  return api.fetchArticles()
    .then(response => {
      dispatch(FETCH_NEW_ARTICLES.fetchNewArticles(response.data));
    })
};