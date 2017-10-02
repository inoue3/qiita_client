import React, { Component } from 'react';
import { TextInput, Button, ScrollView } from 'react-native';
import Indicator from '../common/ActiveIndicator'
import { connect } from 'react-redux';
import { searchArticles } from '../../actions/search_articles';
import Card from "../common/Card";

class NewArticles extends Component {
  static navigationOptions = {
    title: '検索',
  };

  state = {
    query: '',
    isLoading: false
  };

  search() {
    this.setState({ isLoading: true });
    this.props.searchArticles(1, 100, this.state.query)
      .then(() => {
        this.setState({ isLoading: false });
      });
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
        <Indicator isLoading={this.state.isLoading} />
        {this.renderArticles()}
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  articles: state.search,
});

const mapDispatchToProps = (dispatch) => ({
  searchArticles: (page, size, query) => dispatch(searchArticles(page, size, query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewArticles);