import { useState } from 'react';
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const ANIMATION_DURATION = 600;
const LABEL_FONT_SIZE_SMALL = 10;
const LABEL_FONT_SIZE_LARGE = 18;
const LABEL_TRANSLATE_Y_FOCUSED = -10;
const LABEL_TRANSLATE_Y_BLURRED = 0;

export const useInput = () => {
  const [text, setText] = useState('');
  const [focus, setFocus] = useState(false);

  const labelFontSize = useSharedValue(LABEL_FONT_SIZE_LARGE);
  const labelTranslateY = useSharedValue(LABEL_TRANSLATE_Y_BLURRED);

  const animateLabel = (translateY: number, fontSize: number) => {
    labelTranslateY.value = withTiming(translateY, {
      duration: ANIMATION_DURATION,
    });
    labelFontSize.value = withTiming(fontSize, {
      duration: ANIMATION_DURATION,
    });
  };

  const labelAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: labelTranslateY.value }],
    fontSize: labelFontSize.value,
    lineHeight: labelFontSize.value * 1.2,
  }));

  const handleOnFocus = () => {
    animateLabel(LABEL_TRANSLATE_Y_FOCUSED, LABEL_FONT_SIZE_SMALL);
    setFocus(true);
  };

  const handleOnBlur = () => {
    if (!text) {
      animateLabel(LABEL_TRANSLATE_Y_BLURRED, LABEL_FONT_SIZE_LARGE);
    }
    setFocus(false);
  };

  const handleReset = () => {
    setText('');
    animateLabel(LABEL_TRANSLATE_Y_BLURRED, LABEL_FONT_SIZE_LARGE);
  };

  return {
    text,
    setText,
    focus,
    labelAnimatedStyle,
    handleOnFocus,
    handleOnBlur,
    handleReset,
  };
};
