import { createActions } from 'redux-actions'
import api from '../api/index';
import { actions } from '../../type.root';
import { fetchProfile } from './profile_action';

function fetchStockDispatcher(dispatch, getState) {
  const { auth, profile } = getState();

  if (!auth.login) {
    throw new Error('ログインされていません。');
  }

  return api.fetchStock(auth.token, profile.id)
    .then(res => dispatch(actions.fetchStock(res.data)))
    .catch(err => console.error(err));
}

export const fetchStock = () => (dispatch, getState) => {
  const { profile } = getState();

  if (Object.keys(profile).length === 0) {
    return fetchProfile()(dispatch, getState).then(() => fetchStockDispatcher(dispatch, getState));
  }

  return fetchStockDispatcher(dispatch, getState);
};
