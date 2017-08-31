import { StackNavigator } from 'react-navigation';
import HomeScreen from './src/components/Home';
import FavoredArticlesContainer from './src/components/favored_articles/FavoredArticlesContainer';
import NewArticlesContainer from './src/components/new_articles/NewArticlesContainer';

export const Routes = {
  Home: { screen: HomeScreen , page: 'Home'},
  FavoredArticles: { screen: FavoredArticlesContainer , page: 'FavoredArticles'},
  NewArticles: { screen: NewArticlesContainer , page: 'NewArticles'}
}

export const App = StackNavigator(Routes)
