import { handleActions } from 'redux-actions';
import { actions } from '../../type.root';

const defaultState = { login: false, token: null };

export default handleActions({
  [actions.login]: (state, action) => ({
    ...state,
    login: true,
    token: action.payload || null
  })
}, defaultState);