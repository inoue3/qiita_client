import { createActions } from 'redux-actions'
import api from '../api/index';
import { actions } from '../../type.root';
import { fetchProfile } from './profile_action';

const fetchStockDispatcher = (dispatch, getState, action) => {
  const { auth, profile } = getState();

  if (!auth.login) {
    throw new Error('ログインされていません。');
  }

  return api.fetchStock(auth.token, profile.id)
    .then(res => dispatch(action(res.data)))
    .catch(err => console.error(err));
};

export const fetchStock = () => (dispatch, getState) => {
  const { profile } = getState();

  if (Object.keys(profile).length === 0) {
    return fetchProfile()(dispatch, getState)
      .then(() => fetchStockDispatcher(dispatch, getState, actions.fetchStock));
  }

  return fetchStockDispatcher(dispatch, getState, actions.fetchStock);
};

export const fetchNextStock = () => (dispatch, getState) => {
  const { profile } = getState();

  if (Object.keys(profile).length === 0) {
    return fetchProfile()(dispatch, getState)
      .then(() => dispatcher(dispatch, getState, actions.fetchNextStock));
  }

  return fetchStockDispatcher(dispatch, getState, actions.fetchNextStock);
};
