import { LOGIN } from '../../type.root'

export const setToken = token => (dispatch) => dispatch(LOGIN.login(token));