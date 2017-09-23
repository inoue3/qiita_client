import { createActions } from 'redux-actions'

export const LOGIN =  {
  login
} = createActions('LOGIN');

export const GET_POPULAR_ARTICLES =  {
  getPopularArticles
} = createActions('GET_POPULAR_ARTICLES');

export const FETCH_NEW_ARTICLES =  {
  fetchNewArticles
} = createActions('FETCH_NEW_ARTICLES');

export const SEARCH_ARTICLES =  {
  searchArticles
} = createActions('SEARCH_ARTICLES');