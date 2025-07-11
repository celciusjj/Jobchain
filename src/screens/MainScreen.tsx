import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Input } from '../components/Input';

export const MainScreen = () => {
  return (
    <View style={styles.container}>
      <Input />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});
