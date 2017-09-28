import { handleActions } from 'redux-actions';
import _ from 'lodash';
import { actions } from '../../type.root';

const defaultState = [];

export default handleActions({
  [actions.fetchStock]: (state, action) => ([
    ...action.payload
  ]),
  [actions.fetchNextStock]: (state, action) => (_.uniqBy([
    ...state,
    ...action.payload
  ], 'id'))
}, defaultState);