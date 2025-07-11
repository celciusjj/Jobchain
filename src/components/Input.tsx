import React from 'react';
import { StyleSheet, Text, TextInput, View, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useInput } from '../hooks/useInput';

export const Input = () => {
  const { focus, handleReset, setFocus, setText, text } = useInput();

  return (
    <View style={[styles.container, focus && styles.containerFocus]}>
      {focus ? <Text style={styles.label}>Correo electrónico</Text> : null}

      <TextInput
        style={[styles.input, focus && styles.inputFocus]}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChangeText={setText}
        value={text}
        placeholder="Escribe tu correo electrónico"
        placeholderTextColor="#7876B1"
        multiline={false}
      />

      {text ? (
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
  },
  containerFocus: {
    borderColor: '#7D77FF33',
  },
  label: {
    position: 'absolute',
    top: 8,
    fontSize: 10,
    zIndex: 99,
    color: '#7D77FF',
    marginLeft: 20,
    lineHeight: 10,
  },
  input: {
    backgroundColor: '#141534',
    height: 60,
    flex: 1,
    borderRadius: 15,
    paddingLeft: 20,
    paddingRight: 40,
    color: 'white',
    fontSize: 18,
  },
  inputFocus: {
    borderWidth: 2,
    borderColor: '#7871FF',
    paddingTop: 15,
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
