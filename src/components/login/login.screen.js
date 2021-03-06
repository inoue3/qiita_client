import React, { Component } from 'react';
import { Linking } from 'react-native';
import { connect } from 'react-redux';
import url from 'url';
import queryString from 'query-string';
import uuid from 'uuid/v4';
import Config from 'react-native-config';
import api from '../../api/index';
import { Actions } from 'react-native-router-flux';
import { setToken } from '../../actions/login';

const SCOPE = 'read_qiita write_qiita';

class Login extends Component {
  componentDidMount() {
    this.checkToken = uuid();

    const query = {
      client_id: Config.CLIENT_ID,
      scope: SCOPE,
      state: this.checkToken
    };

    Linking.openURL('https://qiita.com/api/v2/oauth/authorize?' + queryString.stringify(query));

    Linking.addEventListener('url', this._handleOpenURL.bind(this));
  }

  _handleOpenURL(event) {
    const { state, code } = queryString.parse(url.parse(event.url).query);

    if (this.checkToken !== state) {
      console.error('不正なurlを取得');
      return;
    }

    const query = {
      client_id: Config.CLIENT_ID,
      client_secret: Config.CLIENT_SECRET,
      code
    };

    api.fetchAccessToken(query)
      .then(res => this.props.onLoadToken(res.data.token))
      .then(() => Actions.home());
    Linking.removeEventListener('url', this._handleOpenURL);
  }

  render() {
    return null;
  }
}

const mapDispatchToProps = {
  onLoadToken: setToken
};

export default connect(null, mapDispatchToProps)(Login);
