import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const getUserName = msg => readlineSync.question(msg);

const play = (level, getTask) => {
  if (level < 0) {
    return null;
  }
  if (level === 0) {
    return true;
  }
  const task = getTask();
  const showTask = car(task);
  const correctAnswer = (cdr(task));
  const userAnswer = readlineSync.question(`Question: ${showTask} `);
  console.log(`Your answer: ${userAnswer}`);
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return play(level - 1, getTask);
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
};

export default (description = '', levels = -1, task) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const userName = getUserName('May I have your name? ');
  console.log(`Hello, ${userName}! \n`);
  const winGame = play(levels, task);
  if (winGame) {
    console.log(`Congratulations, ${userName}!`);
  } else if (winGame === false) {
    console.log(`Let's try again, ${userName}!`);
  }
};
