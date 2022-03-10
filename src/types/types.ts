export type LetterStatus = "correct" | "incorrect-position" | "incorrect" | "unanswered";

export type Letter = { letter: string; status: LetterStatus };

export type Word = [Letter, Letter, Letter, Letter, Letter];

// TODO Backend would like to pass a status code to the board.

export type Gameboard = Word[];