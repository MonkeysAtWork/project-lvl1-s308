import readlineSync from 'readline-sync';
import { cons, car, cdr } from 'hexlet-pairs';

const levels = 3;
const description = 'What is the resilt of expression? \n';

// max value exclude, min include
const getRandomNumber = (min = 1, max = 100) => Math.floor(Math.random() * (max - min)) + min;
const getUserName = msg => readlineSync.question(msg);
const getTask = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber(1, 10);
  const sign = getRandomNumber(1, 4);
  const show = () => {
    switch (sign) {
      case 1:
        return `${num1} + ${num2}`;
      case 2:
        return `${num1} - ${num2}`;
      default:
        return `${num1} * ${num2}`;
    }
  };
  const solve = () => {
    switch (sign) {
      case 1:
        return num1 + num2;
      case 2:
        return num1 - num2;
      default:
        return num1 * num2;
    }
  };
  return cons(show(), solve());
};
const showTask = mathEx => car(mathEx);
const getSolution = mathEx => cdr(mathEx);

const play = (level) => {
  if (level === 0) {
    return true;
  }
  const task = getTask();
  const userAnswer = readlineSync.question(`Question: ${showTask(task)} `);
  console.log(`Your answer: ${userAnswer}`);
  const correctAnswer = getSolution(task);
  if (userAnswer === String(correctAnswer)) {
    console.log('Correct!');
    return play(level - 1);
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
};

export default () => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const userName = getUserName('May I have your name? ');
  console.log(`Hello, ${userName}! \n`);
  const winGame = play(levels);
  if (winGame) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
};
