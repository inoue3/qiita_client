import api from '../api/index';
import { SEARCH_ARTICLES } from '../../type.root'

export const searchArticles = (page, size, query) => (dispatch) => {
  return api.fetchArticles(page, size, query)
    .then(response => {
      dispatch(SEARCH_ARTICLES.searchArticles(response.data));
    })
};

