import { handleActions } from 'redux-actions';
import Types from '../../../type.root';

const defaultState = { data: null };

export default handleActions({
  [Types.GET_POPULAR_ARTICLES]: (state, actions) => ({
    ...state,
    data: actions.payload || null
  })
}, defaultState);
