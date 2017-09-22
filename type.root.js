import { createActions } from 'redux-actions'

export const actions =  {
  login
} = createActions('LOGIN');

export default {
  GET_POPULAR_ARTICLES: 'GET_POPULAR_ARTICLES',
  FETCH_NEW_ARTICLES: 'FETCH_NEW_ARTICLES',
  SEARCH_ARTICLES: 'SEARCH_ARTICLES',
}