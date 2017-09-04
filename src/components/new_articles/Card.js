import React, { Component } from 'react';
import { Text, View, Image, Linking, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

const Card = ({ article, navigate }) => {
  const { user, title, url } = article;
  return (
    <TouchableOpacity style={styles.containerStyle} onPress={() => Actions.articleDetail(url)}>
      <View style={styles.thumbnailContainerStyle}>
        {/*<Image style={styles.thumbnailStyle} source={{ uri: user.profile_image_url }} />*/}
      </View>
      <View style={styles.bodyStyle}>
        {/*<Text>{user.id}</Text>*/}
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = {
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    paddingTop: 5,
    paddingBottom: 5,
  },
  thumbnailStyle: {
    width: 50,
    height: 50,
  },
  thumbnailContainerStyle: {
    marginLeft: 10,
    marginRight: 10,
  },
  bodyStyle: {
    width: 280
  }
};

export default Card;