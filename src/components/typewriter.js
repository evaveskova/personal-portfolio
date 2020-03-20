import React, { useState, useEffect } from 'react';

function Typewriter({ words, wait }) {
  const [printedWord, setPrintedWord] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [typeSpeed, setTypeSpeed] = useState(300);

  useEffect(() => {
    setTimeout(() => type(), typeSpeed);
  }, [text, isDeleting]);

  const type = () => {
    const current = wordIndex % words.length;
    const fullTxt = words[current];

    const textL = text.length;
    if (isDeleting) {
      setText(fullTxt.substring(0, textL - 1));
    } else {
      setText(fullTxt.substring(0, textL + 1));
    }

    setPrintedWord(text);

    if (isDeleting) {
      setTypeSpeed(typeSpeed / 3);
    }

    if (!isDeleting && text === fullTxt) {
      setTypeSpeed(wait);
      setIsDeleting(true);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setWordIndex(wordIndex + 1);
      setTypeSpeed(300);
    }
  };

  return (
    <h1>
      {printedWord}
    </h1>
  );
}

export default Typewriter;
