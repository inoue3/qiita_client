import { actions } from '../../type.root';

export default function(state = [], action) {
  switch (action.type) {
    case actions.fetchNewArticles().type:
      return action.payload;
  }
  return state;
}