import { createActions } from 'redux-actions'
import api from '../api/index';
import type from '../../type.root'

const actions = createActions(type.FETCH_NEW_ARTICLES);
export const fetchNewArticles = params => (dispatch) => {
  return api.fetchArticles()
    .then(response => {
      dispatch(actions.fetchNewArticles(response.data));
    })
};