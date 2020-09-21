import React from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

export const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <LottieView
          resizeMode="cover"
          style={styles.content}
          source={require('../assets/animations/tks.json')}
          autoPlay
          loop
        />
      </View>
    </SafeAreaView>
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
