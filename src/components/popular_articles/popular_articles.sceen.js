import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	Text, View, StyleSheet, FlatList
} from 'react-native';
import { fetchPopularArticles } from '../../actions/popular_articles_action';
import TabBar from '../common/TabBar';

class PopularArticles extends Component {
	static navigationOptions = {
		title: '人気記事一覧',
	};

	componentDidMount() {
		this.props.onMountRequest();
	}

	render() {
		return (
			<View>
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
						</View>
					)}
					style={styles.container} />
			  <TabBar/>
			</View>
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
	data: state.popularArticles.data
})

const mapDispatchToProps = {
	onMountRequest: fetchPopularArticles
}

export default connect(mapStateToProps, mapDispatchToProps)(PopularArticles)
