import { createActions } from 'redux-actions'
import api from '../api/index';
import type from '../../type.root'

export const fetchNewArticles = params => (dispatch) => {
  return api.fetchNewArticles()
    .then(response => {
      dispatch(createActions(type.FETCH_NEW_ARTICLES).fetchNewArticles(response.data));
    })
};