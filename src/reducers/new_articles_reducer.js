import { FETCH_NEW_ARTICLES } from '../../type.root';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_NEW_ARTICLES.fetchNewArticles().type:
      return action.payload;
  }
  return state;
}