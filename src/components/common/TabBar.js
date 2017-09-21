import React, { Component } from 'react';
import { View, Image   } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import { Actions } from 'react-native-router-flux';
import { Icon } from 'react-native-vector-icons/FontAwesome';

class TabBar extends Component {

  state = { selectedTab: 'new' };

  onNewPressTab() {
    Actions.newArticles();
    this.setState({ selectedTab: 'new' });
  }
  onPopularPressTab(params) {
    Actions.popularArticles();
    this.setState({ selectedTab: 'popular' });
  }
  onSearchPressTab(params) {
    Actions.searchArticles();
    this.setState({ selectedTab: 'search' });
  }
  onStockPressTab(params) {
    Actions.searchArticles();
    this.setState({ selectedTab: 'stock' });
  }

  render() {
    return (
      <View>
      <TabNavigator>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'new'}
          title="新着記事"
          onPress={() => this.onNewPressTab()}
        >
        </TabNavigator.Item>
        <TabNavigator.Item
          title="人気記事"
          onPress={() => this.onPopularPressTab()}
        >
        </TabNavigator.Item>
        <TabNavigator.Item
          title="検索"
          onPress={() => this.onSearchPressTab()}
        >
        </TabNavigator.Item>
        <TabNavigator.Item
          title="ストック"
          onPress={() => this.onStockPressTab()}
        >
        </TabNavigator.Item>
      </TabNavigator>
      </View>
    );
  };
}

export default TabBar;