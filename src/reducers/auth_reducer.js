import { handleActions } from 'redux-actions';
import { actions } from '../../type.root';

const defaultState = { login: false, token: null };

export default handleActions({
  [actions.login]: (state, actions) => ({
    ...state,
    login: true,
    token: actions.payload || null
  })
}, defaultState);