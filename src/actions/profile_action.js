import api from '../api/index';
import { actions } from '../../type.root';

export const fetchProfile = () => (dispatch, getState) => {
  const { auth } = getState();
  if (!auth.login) {
    throw new Error('ログインされていません。');
  }
  return api.fetchProfile(auth.token)
    .then(res => dispatch(actions.fetchProfile(res.data)))
    .catch(err => console.error(err));
};