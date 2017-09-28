import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { fetchStock, fetchNextStock } from '../../actions/stock_action';
import Card from "../common/Card";

class StockScreen extends Component {
  state = {
    isLoading: false,
    canNextFetch: true,
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
    if (!this.state.canNextFetch) {
      return;
    }

    const size = this.props.stockArticles.length;
    const page = this.state.page + 1;
    this.setState({ page });
    setTimeout(() => this.props.fetchNextStock(page).then(() => {
      if (size === this.props.stockArticles.length) {
        this.setState({ canNextFetch: false })
      }
    }), 500);
  }

  fetchArticles() {
    this.setState({ isLoading: true });
    return this.props.fetchStock()
      .then(() => this.setState({ isLoading: false }));
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.auth.login,
  stockArticles: state.stock
});

const mapDispatchToProps = { fetchStock, fetchNextStock };

export default connect(mapStateToProps, mapDispatchToProps)(StockScreen);
