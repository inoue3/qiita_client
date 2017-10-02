import { handleActions } from 'redux-actions';
import { actions } from '../../type.root';

const defaultState = [];

export default handleActions({
  [actions.getPopularArticles]: (state, actions) => ({
    ...state,
    data: actions.payload || null
  })
}, defaultState);
