import { createActions } from 'redux-actions'
import type from '../../type.root'

const actions = createActions(type.SET_TOKEN);
export const setToken = token => (dispatch) => dispatch(actions.setToken(token));