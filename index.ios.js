import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store.root';

import {
  AppRegistry,
  Linking
} from 'react-native';

import Routes from './routes';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('qiita_client', () => App);
