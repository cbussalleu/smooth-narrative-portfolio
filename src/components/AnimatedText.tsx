
import React, { useEffect, useRef, useState } from 'react';

interface AnimatedTextProps {
  text: string;
  isVisible: boolean;
  delay?: number;
  className?: string;
  type?: 'title' | 'paragraph';
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  text, 
  isVisible, 
  delay = 0, 
  className = '',
  type = 'paragraph'
}) => {
  const [animatedWords, setAnimatedWords] = useState<boolean[]>([]);
  const words = text.split(' ');

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        words.forEach((_, index) => {
          setTimeout(() => {
            setAnimatedWords(prev => {
              const newArray = [...prev];
              newArray[index] = true;
              return newArray;
            });
          }, index * 100); // 100ms delay between each word
        });
      }, delay);

      return () => clearTimeout(timer);
    } else {
      setAnimatedWords([]);
    }
  }, [isVisible, delay, words.length]);

  const baseStyle = type === 'title' 
    ? 'inline-block' 
    : 'inline whitespace-nowrap';

  return (
    <span className={className}>
      {words.map((word, index) => (
        <React.Fragment key={index}>
          <span
            className={`relative ${baseStyle} transition-all duration-700 ease-out`}
            style={{
              opacity: animatedWords[index] ? 1 : 0,
              filter: animatedWords[index] ? 'blur(0px)' : 'blur(20px)',
              transform: animatedWords[index] ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            {word}
          </span>
          {index < words.length - 1 && ' '}
        </React.Fragment>
      ))}
    </span>
  );
};

export default AnimatedText;
