import { actions } from '../../type.root'

export const setToken = token => (dispatch) => dispatch(actions.login(token));