import { cons } from 'hexlet-pairs';
import startGame from '..';

const levels = 3;
const description = 'Answer "yes" if number even otherwise answer "no" \n';

const getRandomNumber = (min = 1, max = 100) => Math.floor(Math.random() * (max - min)) + min;
const isEven = number => number % 2 === 0;

const getTask = () => {
  const task = getRandomNumber();
  const solution = isEven(task) ? 'yes' : 'no';
  return cons(task, solution);
};

export default () => startGame(description, levels, getTask);
