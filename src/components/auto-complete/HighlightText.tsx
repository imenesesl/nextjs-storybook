import React, { useEffect, useRef } from 'react';

import { ResultsItem } from './styled';

export type HighlightTextProps = {
  text: string;
  query: string;
};

const highlightWord = (text: string) => {
  const regex = new RegExp(`\\b(${text})\\b`, 'gi');
  return regex;
};

export const HighlightText = ({ text, query }: HighlightTextProps) => {
  const textRef = useRef<HTMLUListElement>(null);
  useEffect(() => {
    if (textRef.current) {
      const textElement = textRef.current;
      const text = textElement.innerHTML;
      const space = text.split(' ')?.length === 1 ? '' : '&nbsp;';
      const highlightedText = text.replace(
        highlightWord(query),
        `<span style="font-weight: bold;">${space}${'$1'}&nbsp; </span>`
      );
      textElement.innerHTML = highlightedText;
    }
  }, [query]);
  return (
    <ResultsItem
      tabIndex={0}
      ref={textRef as React.RefObject<HTMLUListElement>}
    >
      {text}
    </ResultsItem>
  );
};
