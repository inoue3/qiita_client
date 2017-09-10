import Types from '../../type.root';

export default function(state = [], action) {
  switch (action.type) {
    case Types.SEARCH_ARTICLES:
      return action.payload
  }
  return state;
}