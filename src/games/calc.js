import { cons } from 'hexlet-pairs';
import startGame from '..';

const levels = 3;
const description = 'What is the result of expression? \n';

// max value exclude, min include
const getRandomNumber = (min = 1, max = 100) => Math.floor(Math.random() * (max - min)) + min;

const getNum1 = () => getRandomNumber();
const getNum2 = () => getRandomNumber(1, 10);
const getSign = () => getRandomNumber(1, 4);

const getTask = (a, b, sign) => {
  switch (sign) {
    case 1:
      return `${a} + ${b}`;
    case 2:
      return `${a} - ${b}`;
    default:
      return `${a} * ${b}`;
  }
};
const getSolution = (a, b, sign) => {
  switch (sign) {
    case 1:
      return a + b;
    case 2:
      return a - b;
    default:
      return a * b;
  }
};

const taskWithSol = () => {
  const num1 = getNum1();
  const num2 = getNum2();
  const sign = getSign();
  const task = getTask(num1, num2, sign);
  const solution = String(getSolution(num1, num2, sign));
  return cons(task, solution);
};

export default () => startGame(description, levels, taskWithSol);
