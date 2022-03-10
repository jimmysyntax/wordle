import { Letter } from './Letter'
import { Word as WordType, Letter as LetterType } from '../types/types'
import { FC } from 'react'

export const InProgressWord: FC<{ word: LetterType[] }> = ({ word }) => {
  return (
    <>
      {word.map((letter, index) => (
        <Letter key={index} letter={letter.letter} status={letter.status} />
      ))}
      {Array(5 - word.length).fill(null).map((_value, index) => (
        <Letter key={index} />
      ))}
    </>
  )
}

export const Word: FC<{ word: WordType}> = ({ word }) => {
  return (
    <>
      {word.map((letter, index) => (
        <Letter key={index} letter={letter.letter} status={letter.status} />
      ))}
    </>
  )
}

export const EmptyWord = () => {
  return (
    <>
      <Letter />
      <Letter />
      <Letter />
      <Letter />
      <Letter />
    </>
  )
}