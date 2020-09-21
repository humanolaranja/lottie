import React from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

export const Loading = () => {
  return (
    <View style={styles.container}>
      <LottieView
        resizeMode="cover"
        style={styles.content}
        source={require('../assets/animations/coffee.json')}
        autoPlay
        loop
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF7F60',
  },
  content: { width: 300, height: 300 },
});
