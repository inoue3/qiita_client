import React, { Component } from 'react';
import {
  Text, View
} from 'react-native';

import axios from 'axios';

import { parseString } from 'xml2js';

export default class FavoredArticlesContainer extends Component {
  static navigationOptions = {
    title: '人気記事一覧',
  };

  state = {
    data: '',
  };

  componentDidMount() {
    axios.get('https://qiita.com/api/v2/items', { params: { sort: 'likes_count' } })
      .then((response) => {
        this.setState({data: response.data})
      }).catch((response) => {
        console.log(response)
      })
    axios.get('https://qiita.com/popular-items/feed')
      .then(response =>
        parseString(response, obj =>
          console.log(obj)
        )
      )
  }

  render() {
    let contents = (<View/>);
    if (this.state.data) {
      contents = this.state.data.map(item => (
        <View key={`${this.constructor.name}-${item.id}`}>
          <Text>
            {item.title}
          </Text>
        </View>
      ));
    }
    return (
      <View>
        {contents}
      </View>
    );
  }
}
