import { cons } from 'hexlet-pairs';
import startGame from '..';
import getRandomNumber from '../utils';

const description = 'Find the greatest common divisor of given numbers.';

const calcGcd = (a, b) => {
  if (a === 0 || b === 0) {
    return a + b;
  }
  return a > b ? calcGcd(a % b, b) : calcGcd(a, b % a);
};

const getGameData = () => {
  const number1 = getRandomNumber(2, 100);
  const number2 = getRandomNumber(2, 100);
  const question = `${number1} ${number2}`;
  const answer = calcGcd(number1, number2);
  return cons(question, answer);
};

export default () => startGame(description, getGameData);
