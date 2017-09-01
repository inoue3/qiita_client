import React from 'react';
import { connect } from 'react-redux';
import { Router, Scene } from 'react-native-router-flux';
import Home from './src/components/Home';
import PopularArticles from './src/components/popular_articles/popular_articles.sceen';
import NewArticles from './src/components/new_articles/NewArticlesContainer';
import ArticleDetail from './src/components/ArticleDetailContainer';


const DefaultRouterWithRedux = connect()(Router);

export default () => (
  <DefaultRouterWithRedux>
    <Scene key="root">
      <Scene key="home" component={Home} />
      <Scene key="popularArticles" component={PopularArticles} />
      <Scene key="newArticles" component={NewArticles} />
      <Scene key="articleDetail" component={ArticleDetail} />
    </Scene>
  </DefaultRouterWithRedux>
)
