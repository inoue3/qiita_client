import React, { Component } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const Indicator= ({ isLoading }) => {
    return (
      <View style = {styles.container}>
        {
          isLoading? <ActivityIndicator animating={isLoading} size="large" style = {styles.activityIndicator}/> :null
        }
      </View>
    );
};

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80
  }
});

export default Indicator;