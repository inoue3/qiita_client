import { SEARCH_ARTICLES } from '../../type.root';

export default function(state = [], action) {
  switch (action.type) {
    case SEARCH_ARTICLES.searchArticles().type:
      return action.payload
  }
  return state;
}