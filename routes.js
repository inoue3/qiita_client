import React from 'react';
import { connect } from 'react-redux';
import { Router, Scene } from 'react-native-router-flux';
import Home from './src/components/Home';
import PopularArticles from './src/components/popular_articles/popular_articles.sceen';
import NewArticles from './src/components/new_articles/new_articles.sceen';
import ArticleDetail from './src/components/article_detail/article_detail.sceen';
import Login from './src/components/login/login.screen';
import SearchArticles from './src/components/search/search.sceen';
import StockArticles from './src/components/stock/stock.screen';

const DefaultRouterWithRedux = connect()(Router);

export default () => (
  <DefaultRouterWithRedux>
    <Scene key="root">
      <Scene key="home" component={Home} />
      <Scene key="popularArticles" component={PopularArticles} />
      <Scene key="newArticles" component={NewArticles} />
      <Scene key="articleDetail" component={ArticleDetail} />
      <Scene key="login" component={Login} />
      <Scene key="searchArticles" component={SearchArticles} />
      <Scene key="stockArticles" component={StockArticles} />
    </Scene>
  </DefaultRouterWithRedux>
);
