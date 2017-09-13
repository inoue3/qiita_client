import { handleAction } from 'redux-actions';
import Types from '../../type.root';

export default handleAction(Types.SET_TOKEN, (state, action) => action.payload || null, null);
