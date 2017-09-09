import React, { Component } from 'react';
import { TextInput, Button, ScrollView, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { searchArticles, startLoading } from '../../actions/search_articles';
import Card from "../common/Card";

class NewArticles extends Component {
  static navigationOptions = {
    title: '検索',
  };

  state = { query: '' };

  search() {
    this.props.startLoading();
    this.props.searchArticles(1, 100, this.state.query);
  }

  renderArticles() {
    if (!this.props.articles) {
      return;
    }
    return this.props.articles.map(article => {
      return <Card key={article.id} article={article} />
    });
  }

  render() {
    console.log(this.props.isLoading);
    return (
      <ScrollView>
        <TextInput
          style={{ height: 40 }}
          placeholder="Type here to search word"
          onChangeText={(query) => this.setState({ query })}
        />
        <Button
          title="検索"
          onPress={() => this.search()}
        />
        <ActivityIndicator
          animating={this.props.isLoading}
          style={{ alignItems: 'center', justifyContent: 'center', padding: 8, height: 40 }}
          size="large"
        />
        {this.renderArticles()}
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  articles: state.search.articles,
  isLoading: state.search.isLoading
});

const mapDispatchToProps = (dispatch) => ({
  searchArticles: (page, size, query) => dispatch(searchArticles(page, size, query)),
  startLoading: () => dispatch(startLoading()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewArticles);