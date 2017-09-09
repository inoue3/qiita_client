import { createActions } from 'redux-actions'
import api from '../api/index';
import type from '../../type.root'

const actions = createActions(type.SEARCH_ARTICLES);
export const searchArticles = (page, size, query) => (dispatch) => {
  return api.fetchArticles(page, size, query)
    .then(response => {
      dispatch({
        type: type.SEARCH_ARTICLES,
        payload: response.data,
        isLoading: false
      });
    })
};

export const startLoading = () => {
  return {
    type: type.START_LOADING
  }
};

