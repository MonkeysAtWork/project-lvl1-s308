import { cons } from 'hexlet-pairs';
import startGame from '..';
import getRandomNumber from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no"';

const isEven = number => number % 2 === 0;

const getGameData = () => {
  const question = getRandomNumber();
  const answer = isEven(question) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => startGame(description, getGameData);
