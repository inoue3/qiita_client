import { handleActions } from 'redux-actions';
import { GET_POPULAR_ARTICLES } from '../../type.root';

const defaultState = [];

export default handleActions({
  [GET_POPULAR_ARTICLES.getPopularArticles]: (state, actions) => ({
    ...state,
    data: actions.payload || null
  })
}, defaultState);
