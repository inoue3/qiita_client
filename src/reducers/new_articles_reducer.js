import Types from '../../type.root';

export default function(state = [], action) {
  switch (action.type) {
    case Types.FETCH_NEW_ARTICLES:
      return action.payload;
  }
  return state;
}