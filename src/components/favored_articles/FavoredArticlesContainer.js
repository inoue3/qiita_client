import React, { Component } from 'react';
import {
  Text, View, StyleSheet, FlatList
} from 'react-native';

import axios from 'axios';

import { parseString } from 'react-native-xml2js';

export default class FavoredArticlesContainer extends Component {
  static navigationOptions = {
    title: '人気記事一覧',
  };

  state = {
    data: '',
  };

  componentDidMount() {
    axios.get('https://qiita.com/popular-items/feed')
      .then(response =>
        parseString(response.data, (err, obj) => this.setState({data: obj.feed.entry}))
      ).catch(response => console.log(response))
  }

  render() {
    return (
      <FlatList
        data={this.state.data}
        keyExtractor={(item, index) => (`${this.constructor.name}-${item.id}`)}
        renderItem={({item}) => (
          <View style={styles.box}>
          <Text>
          {item.title}
          </Text>
          <Text>
          {item.content[0]._.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g,'').replace(/\n/g, '')}
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
