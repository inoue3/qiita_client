import React, { Component } from 'react';
import { ScrollView, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { fetchStock } from '../../actions/stock_action';
import Card from "../common/Card";

class StockScreen extends Component {
  state = {
    isLoading: false
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    this.props.fetchStock()
      .then(() => this.setState({ isLoading: false }));
  }

  renderIndicator() {
    if (this.state.isLoading) {
      return (<ActivityIndicator
        style={{ alignItems: 'center', justifyContent: 'center', padding: 8, height: 40 }}
        size="large"
      />);
    }
  }

  renderArticles() {
    if (!this.props.stockArticles) {
      return null;
    }
    return this.props.stockArticles.map(stock => {
      return <Card key={stock.id} article={stock} navigate={this.state.navigate} />
    });
  }

  render() {
    return (
      <ScrollView>
        {this.renderIndicator()}
        {this.renderArticles()}
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.auth.login,
  stockArticles: state.stock
});

const mapDispatchToProps = { fetchStock };

export default connect(mapStateToProps, mapDispatchToProps)(StockScreen);
