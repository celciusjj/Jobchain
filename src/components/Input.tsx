import React from 'react';
import { StyleSheet, TextInput, View, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useInput } from '../hooks/useInput';
import Animated from 'react-native-reanimated';

export const Input = () => {
  const {
    focus,
    handleReset,
    handleOnBlur,
    setText,
    text,
    handleOnFocus,
    labelAnimatedStyle,
  } = useInput();

  return (
    <View style={[styles.container, focus && styles.containerFocus]}>
      <Animated.Text
        style={[
          styles.labelContainer,
          labelAnimatedStyle,
          // eslint-disable-next-line react-native/no-inline-styles
          { color: !focus ? '#7876B1' : '#7D77FF' },
        ]}
      >
        {focus || text ? 'Correo electrónico' : 'Escribe tu correo electrónico'}
      </Animated.Text>

      <TextInput
        style={[styles.input, focus && styles.inputFocus]}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        onChangeText={setText}
        value={text}
        multiline={false}
      />

      {text && focus ? (
        <Pressable onPress={handleReset} style={styles.closeIcon}>
          <Ionicons name="close" size={20} color="white" />
        </Pressable>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flexDirection: 'row',
    borderRadius: 18,
    borderWidth: 4,
    borderColor: 'transparent',
    overflow: 'visible',
  },
  containerFocus: {
    borderColor: '#7D77FF33',
  },
  labelContainer: {
    flex: 1,
    position: 'absolute',
    zIndex: 99,
    fontSize: 10,
    marginLeft: 20,
    top: '30%',
    left: 0,
    right: 20,
  },
  input: {
    backgroundColor: '#141534',
    height: 60,
    flex: 1,
    borderRadius: 15,
    paddingLeft: 20,
    paddingRight: 40,
    paddingTop: 20,
    color: 'white',
    fontSize: 16,
    borderWidth: 2,
  },
  inputFocus: {
    borderWidth: 2,
    borderColor: '#7871FF',
  },
  closeIcon: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 99,
    backgroundColor: '#35265f',
    width: 25,
    height: 25,
    right: 10,
    top: '50%',
    transform: [{ translateY: -12.5 }],
  },
});
