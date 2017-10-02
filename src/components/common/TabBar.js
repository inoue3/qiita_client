import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import { Actions } from 'react-native-router-flux';

class TabBar extends Component {

  render() {
    return (
      <TabNavigator style={styles.tabBody}>
        <TabNavigator.Item
          title="新着記事"
          renderIcon={() => <Image source={{ uri: 'http://facebook.github.io/react/img/logo_og.png' }} style={ styles.tabButton } />}
          renderSelectedIcon={() => <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTUxGrvNHT9RN5PBwtF6g0zJAbD_azZO0KnGT7mB7WTB734t1Kzg' }}style={ styles.tabButton }  />}
          onPress={() => Actions.newArticles()}
        />
        <TabNavigator.Item
          title="人気記事"
          renderIcon={() => <Image source={{ uri: 'http://facebook.github.io/react/img/logo_og.png' }} style={ styles.tabButton } />}
          renderSelectedIcon={() => <Image source={{ uri: 'http://facebook.github.io/react/img/logo_og.png' }} />}
          onPress={() => Actions.popularArticles()}
        />
        <TabNavigator.Item
          title="検索"
          renderIcon={() => <Image source={{ uri: 'http://facebook.github.io/react/img/logo_og.png' }} style={ styles.tabButton } />}
          renderSelectedIcon={() => <Image source={{ uri: 'http://facebook.github.io/react/img/logo_og.png' }} />}
          onPress={() => Actions.searchArticles()}
        />
        <TabNavigator.Item
          title="ストック"
          renderIcon={() => <Image source={{ uri: 'http://facebook.github.io/react/img/logo_og.png' }} style={ styles.tabButton } />}
          renderSelectedIcon={() => <Image source={{ uri: 'http://facebook.github.io/react/img/logo_og.png' }} />}
          onPress={() => Actions.searchArticles()}
        />
      </TabNavigator>
    );
  };
}

const styles = StyleSheet.create({
  tabBody:{
    flex:1
  },
  tabButton: {
    width:22,
    height:22
  },
});

export default TabBar;