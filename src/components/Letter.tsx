import styles from './Letter.module.scss';
import { LetterStatus, Letter as LetterType } from '../types/types';
import { FC } from 'react';

const colorMap: Record<LetterStatus, string> = {
  "correct": "#6aaa64",
  "incorrect-position": "#c9b458",
  "incorrect": "#787c7e",
  "unanswered": "#FFFFFF"
}

export const Letter: FC<Partial<LetterType>> = ({ letter, status }) => {
  return (
    <div 
      className={`${styles.letter} ${letter !== undefined ? status === "unanswered" ? styles.unanswered : styles.answered : ""}`} 
      style={{ backgroundColor: colorMap[status ?? "unanswered"] }}>
      {letter}
    </div>
  );
}