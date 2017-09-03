import React, { Component } from 'react';
import { WebView, Text, View } from 'react-native';

class ArticleDetail extends Component {
  render() {
    return (
      <WebView
        source={{uri: this.props.data }}
      />
    );
  }
}

export default ArticleDetail;