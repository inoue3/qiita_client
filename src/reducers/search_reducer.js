import Types from '../../type.root';

export default function(state = { isLoading: false }, action) {
  switch (action.type) {
    case Types.SEARCH_ARTICLES:
      return Object.assign({}, state,
        {
          articles: action.payload,
          isLoading: false
        }
      );
    case Types.START_LOADING:
      return Object.assign({}, state,
        {
          isLoading: true
        }
      );
  }
  return state;
}