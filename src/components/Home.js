import React, { Component } from 'react';
import {
  StyleSheet, Text, Button, View
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { fetchProfile } from '../actions/profile_action';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  componentDidMount() {
    if (this.props.isLoggedIn) {
      this.props.fetchProfile();
    }
  }

  renderProfile() {
    if (this.props.isLoggedIn) {
      return (
        <Text>
          Welcome {this.props.profile.id}
        </Text>
      )
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        {this.renderProfile()}
        <Button
          onPress={Actions.popularArticles}
          title="人気記事へ"
        />
        <Button
          onPress={Actions.newArticles}
          title="新着記事へ"
        />
        <Button
          onPress={Actions.searchArticles}
          title="検索"
        />
        <Button
          disabled={!this.props.isLoggedIn}
          onPress={Actions.stockArticles}
          title="ストック一覧"
        />
        <Button
          onPress={Actions.login}
          title="ログイン"
        />
      </View>

    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.auth.login,
  profile: state.profile
});

const mapDispatchToProps = { fetchProfile };

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
