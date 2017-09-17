import React, { Component } from 'react';
import {
  StyleSheet, Text, Button, View
} from 'react-native';
import { connect } from 'react-redux';
import { fetchStock } from '../../actions/stock_action';

class StockScreen extends Component {
  componentDidMount() {
    this.props.fetchStock();
  }

  render() {
    return(
      null
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.auth.login,
  stockArticles: state.stock
});

const mapDispatchToProps = { fetchStock };

export default connect(mapStateToProps, mapDispatchToProps)(StockScreen);
