import { dictionary, wordlist } from './constants/Dictionary';
import { Word, Letter } from './types/types';

// Game will choose a secret word.
export function generateWord(): string {
  return wordlist[Math.floor(Math.random() * wordlist.length)];
}

export function letterArrayToString(word: Letter[]) {
    return word.map(l => l.letter).join('').toLocaleLowerCase();
}

export function gameValidation(guess: Letter[], secret: string): Word {
  const response: Word = [
    // TODO need to initialize this as null somehow
    { letter: '', status: 'unanswered' },
    { letter: '', status: 'unanswered' },
    { letter: '', status: 'unanswered' },
    { letter: '', status: 'unanswered' },
    { letter: '', status: 'unanswered' },
  ];

  // Ensure response is 5 letters long
  if (guess && guess.length === 5) {
    const word = letterArrayToString(guess);
    // Guess is in dictionary
    if (dictionary.includes(word)) {
      // Iterate over every letter
      for (let i = 0; i < 5; i++) {
        response[i].letter = guess[i].letter
        if (word[i] === secret[i]) {
          response[i].status = 'correct';
        } else if (secret.includes(word[i])) {
          response[i].status = 'incorrect-position';
        } else {
          response[i].status = 'incorrect';
        }
      }
    } else {
      // Guess wasn't in the dictionary
      alert('Word was not in dictionary.'); // TODO we'll pass a status code as a return.
    }
  } else {
    // Guess' word length was not 5
    alert('Please enter a 5-letter word.');
  }
  return response; // * If input is malformed or inappropriate, status 'unanswered'
}
