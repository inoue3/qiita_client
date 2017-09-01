import React, { Component } from 'react';
import { WebView, Text, View } from 'react-native';

class ArticleDetail extends Component {
  render() {
    state = { url: this.props.navigation.state.params };
    return (
      <WebView
        source={{uri: `${state.url}` }}
      />
    );
  }
}

export default ArticleDetail;