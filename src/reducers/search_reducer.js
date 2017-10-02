import { actions } from '../../type.root';

export default function(state = [], action) {
  switch (action.type) {
    case actions.searchArticles().type:
      return action.payload
  }
  return state;
}