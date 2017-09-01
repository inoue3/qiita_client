import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
} from 'react-native';
import axios from 'axios';
import Card from "./Card";

export default class NewArticlesContainer extends Component {
  static navigationOptions = {
    title: '新着記事一覧',
  };

  state = { articles: [], navigate: this.props.navigation.navigate };

  componentDidMount() {
    const hostUrl = 'https://qiita.com/api/v2';
    axios.get(`${hostUrl}/items`, { params: { page: 1, per_page: 100 } })
      .then(res => {
        this.setState({ articles: res.data } )
      });
  }

  renderArticles() {
    return this.state.articles.map(article => {
      return <Card key={article.id} article={article} navigate={this.state.navigate} />
    });
  }

  render() {
    return (
      <ScrollView>
        {this.renderArticles()}
      </ScrollView>
    );
  }
}