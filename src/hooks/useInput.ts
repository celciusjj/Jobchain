import { useState } from 'react';

export const useInput = () => {
  const [text, setText] = useState('');
  const [focus, setFocus] = useState(false);

  const handleReset = () => setText('');
  return { text, setText, focus, setFocus, handleReset };
};
