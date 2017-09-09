import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import Card from "../common/Card";
import { connect } from 'react-redux';
import { fetchNewArticles } from '../../actions/new_articles_action';

class NewArticles extends Component {
  static navigationOptions = {
    title: '新着記事一覧',
  };

  state = { navigate: this.props.navigation.navigate };

  componentDidMount() {
    this.props.fetchNewArticles();
  }

  renderArticles() {
    return this.props.newArticles.map(article => {
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

const mapStateToProps = state => ({
   newArticles: state.newArticles
});

const mapDispatchToProps = { fetchNewArticles };

export default connect(mapStateToProps, mapDispatchToProps)(NewArticles);