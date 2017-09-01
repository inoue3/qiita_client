import React from 'react';
import { connect } from 'react-redux';
import { Router, Scene } from 'react-native-router-flux';
import Home from './src/components/Home';
import FavoredArticles from './src/components/favored_articles/favored_articles.sceen';
import NewArticles from './src/components/new_articles/NewArticlesContainer';

const DefaultRouterWithRedux = connect()(Router);

export default () => (
  <DefaultRouterWithRedux>
    <Scene key="root">
      <Scene key="home" component={Home} />
      <Scene key="favoredArticles" component={FavoredArticles} />
      <Scene key="newArticles" component={NewArticles} />
    </Scene>
  </DefaultRouterWithRedux>
)
