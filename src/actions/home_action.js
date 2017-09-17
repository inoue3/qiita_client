import api from '../api/index';
import { actions } from '../../type.root';

export const fetchProfile = () => (dispatch, getState) => {
  const { auth } = getState();
  console.log(auth);
  if (auth.login) {
    api.fetchProfile(auth.token)
      .then(res => dispatch(actions.fetchProfile(res.data)))
      .catch(err => console.error(err))
  }
};