import { cons } from 'hexlet-pairs';
import startGame from '..';

const description = 'Answer "yes" if number even otherwise answer "no"';

const getRandomNumber = (min = 1, max = 100) => Math.floor(Math.random() * (max - min)) + min;
const isEven = number => number % 2 === 0;

const getNumber = () => {
  const number = getRandomNumber();
  const solution = isEven(number) ? 'yes' : 'no';
  return cons(number, solution);
};

export default () => startGame(description, getNumber);
