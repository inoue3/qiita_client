import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { fetchStock } from '../../actions/stock_action';
import Card from "../common/Card";

class StockScreen extends Component {
  state = {
    isLoading: false,
    page: 1,
  };

  componentDidMount() {
    this.fetchArticles();
  }

  renderArticles({item}) {
    return (<Card key={item.id} article={item} />);
  }

  render() {
    return (
      <FlatList
        data={this.props.stockArticles}
        renderItem={this.renderArticles}
        refreshing={this.state.isLoading}
        onRefresh={this.fetchArticles.bind(this)}
        onEndReached={this.fetchNextArticles.bind(this)}
      />
    );
  }

  fetchNextArticles() {
    this.setState({ page: this.state.page + 1 });
    this.fetchArticles();
  }

  fetchArticles() {
    this.setState({ isLoading: true });
    console.log(this.state.page);
    this.props.fetchStock(this.state.page)
      .then(() => this.setState({ isLoading: false }));
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.auth.login,
  stockArticles: state.stock
});

const mapDispatchToProps = { fetchStock };

export default connect(mapStateToProps, mapDispatchToProps)(StockScreen);
