import { handleActions } from 'redux-actions';
import { actions } from '../../type.root';

const defaultState = {};

export default handleActions({
  [actions.fetchProfile]: (state, action) => ({
    ...state,
    ...action.payload
  })
}, defaultState);