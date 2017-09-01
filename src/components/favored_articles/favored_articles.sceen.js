import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Text, View, StyleSheet, FlatList
} from 'react-native';
import { fetchData } from './action';

class FavoredArticlesContainer extends Component {
  static navigationOptions = {
    title: '人気記事一覧',
  };

  componentDidMount() {
    this.props.onMountRequest();
  }

  render() {
    return (
      <FlatList
        data={this.props.data || ''}
        keyExtractor={(item, index) => (`${this.constructor.name}-${item.id}`)}
        renderItem={({ item }) => (
          <View style={styles.box}>
            <Text>
              {item.title}
            </Text>
            <Text>
              {item.content[0]._.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, '').replace(/\n/g, '')}
            </Text>
            <Text>

            </Text>
          </View>
        )}
        style={styles.container} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#d6d7da',
  },
  box: {
    padding: 10
  },
  division: {
    borderBottomWidth: 1,
    borderBottomColor: '#d6d7da'
  }
});

const mapStateToProps = state => ({
	data: state.favoredArticles.data
})

const mapDispatchToProps = dispatch => ({
	onMountRequest: () => fetchData(dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(FavoredArticlesContainer)
