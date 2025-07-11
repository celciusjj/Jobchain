import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export const MainScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Hello world :D</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 25,
  },
});
