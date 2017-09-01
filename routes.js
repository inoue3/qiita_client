import { StackNavigator } from 'react-navigation';
import HomeScreen from './src/components/Home';
import FavoredArticlesContainer from './src/components/popular_articles/PopularArticlesContainer';
import NewArticlesContainer from './src/components/new_articles/NewArticlesContainer';
import ArticleDetailContainer from './src/components/ArticleDetailContainer';

export const Routes = {
  Home: { screen: HomeScreen , page: 'Home'},
  FavoredArticles: { screen: FavoredArticlesContainer , page: 'FavoredArticles'},
  NewArticles: { screen: NewArticlesContainer , page: 'NewArticles'},
  ArticleDetail: { screen: ArticleDetailContainer , page: 'ArticleDetail'}
}

export const App = StackNavigator(Routes)
