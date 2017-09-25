import { createActions } from 'redux-actions'

export const LOGIN = createActions('LOGIN');
export const GET_POPULAR_ARTICLES = createActions('GET_POPULAR_ARTICLES');
export const FETCH_NEW_ARTICLES = createActions('FETCH_NEW_ARTICLES');
export const SEARCH_ARTICLES = createActions('SEARCH_ARTICLES');