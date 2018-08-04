import { createActions } from 'redux-actions'

export const actions =  {
  login, getPopularAricles, fetchNewArticles, searchArticles
} = createActions('LOGIN', 'GET_POPULAR_ARTICLES', 'FETCH_NEW_ARTICLES','SEARCH_ARTICLES');