import { Word, EmptyWord, InProgressWord } from './Word';
import { Letter, Word as WordType, Gameboard } from '../types/types';
import { useState, useEffect } from 'react';

import styles from './Grid.module.scss';
import { gameValidation, generateWord } from '../Game';

export const Grid = () => {
  const [hiddenWord] = useState<string>(generateWord())
  const [gameBoard, setGameBoard] = useState<Gameboard>([]);
  const [inProgressWord, setInProgressWord] = useState<Letter[]>([]);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.code === 'Backspace' || e.code === 'Delete') {
      setInProgressWord((word) => word?.slice(0, word?.length - 1));
    } else if (e.code === 'Enter') {
      if (inProgressWord.length < 5) {
        console.log('Enter 5 Letters');
      } else {
        const wordResult = gameValidation(inProgressWord, hiddenWord)
        console.log(wordResult);
        setGameBoard((board) => [...board, wordResult]);
        setInProgressWord([]);
      }
    } else if (inProgressWord.length < 5) {
      if (e.keyCode >= 65 && e.keyCode <= 90) {
        setInProgressWord((word) => [
          ...word,
          { letter: e.key.toUpperCase(), status: 'unanswered' },
        ]);
      }
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div className={styles.grid}>
      {gameBoard.map((word, index) => (
        <Word key={index} word={word} />
      ))}
      <InProgressWord word={inProgressWord} />
      {Array(5 - gameBoard.length)
        .fill(null)
        .map((_value, index) => (
          <EmptyWord key={index} />
        ))}
    </div>
  );
};
