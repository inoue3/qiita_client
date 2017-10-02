import api from '../api/index';
import { actions } from '../../type.root'

export const fetchNewArticles = params => (dispatch) => {
  return api.fetchArticles()
    .then(response => {
      dispatch(actions.fetchNewArticles(response.data));
    })
};