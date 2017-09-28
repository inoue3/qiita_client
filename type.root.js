import { createActions } from 'redux-actions'

export const actions =  {
  login,
  fetchProfile,
  fetchStock,
  fetchNextStock,
} = createActions('LOGIN',
  'FETCH_PROFILE',
  'FETCH_STOCK',
  'FETCH_NEXT_STOCK');

export default {
  GET_POPULAR_ARTICLES: 'GET_POPULAR_ARTICLES',
  FETCH_NEW_ARTICLES: 'FETCH_NEW_ARTICLES',
  SEARCH_ARTICLES: 'SEARCH_ARTICLES',
}