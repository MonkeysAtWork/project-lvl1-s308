import { cons } from 'hexlet-pairs';
import startGame from '..';
import getRandomNumber from '../utils';

const description = 'What is the result of expression?';

const makeQuestionAndAnswer = (a, b, variation) => {
  switch (variation) {
    case 1:
      return cons(`${a} + ${b}`, String(a + b));
    case 2:
      return cons(`${a} - ${b}`, String(a - b));
    default:
      return cons(`${a} * ${b}`, String(a * b));
  }
};

const getGameData = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber(1, 10);
  const variation = getRandomNumber(1, 4);
  return makeQuestionAndAnswer(number1, number2, variation);
};

export default () => startGame(description, getGameData);
