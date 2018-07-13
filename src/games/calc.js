import { cons } from 'hexlet-pairs';
import startGame from '..';

const description = 'What is the result of expression?';

// max value exclude, min include
const getRandomNumber = (min = 1, max = 100) => Math.floor(Math.random() * (max - min)) + min;

const formExample = (a, b, sign) => {
  switch (sign) {
    case 1:
      return cons(`${a} + ${b}`, String(a + b));
    case 2:
      return cons(`${a} - ${b}`, String(a - b));
    default:
      return cons(`${a} * ${b}`, String(a * b));
  }
};

const getMathExampleAndSolution = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber(1, 10);
  const act = getRandomNumber(1, 4);
  return formExample(num1, num2, act);
};

export default () => startGame(description, getMathExampleAndSolution);
