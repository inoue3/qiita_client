import api from '../api/index';
import { actions } from '../../type.root'

export const searchArticles = (page, size, query) => (dispatch) => {
  return api.fetchArticles(page, size, query)
    .then(response => {
      dispatch(actions.searchArticles(response.data));
    })
};

