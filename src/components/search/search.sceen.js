import React, { Component } from 'react';
import {
  View,
  TextInput,
  Button,
  ScrollView,
  ActivityIndicator,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import { searchArticles } from '../../actions/search_articles';
import Card from "../common/Card";
import TabBar from '../common/TabBar';
import ActiveIndicator from '../common/ActiveIndicator';

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
    return this.props.articles.map(article => {
      return <Card key={article.id} article={article} />
    });
  }

  render() {
    return (
      <View style={styles.main}>
        <ScrollView>
          <TextInput
            style={styles.input}
            placeholder="Type here to search word"
            onChangeText={(query) => this.setState({ query })}
          />
          <Button
            title="検索"
            onPress={() => this.search()}
          />
          <ActiveIndicator isLoading={this.state.isLoading} />
          {this.renderArticles()}
        </ScrollView>
        <TabBar/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  input: {
    height: 40
  },
});

const mapStateToProps = state => ({
  articles: state.search,
});

const mapDispatchToProps = (dispatch) => ({
  searchArticles: (page, size, query) => dispatch(searchArticles(page, size, query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewArticles);