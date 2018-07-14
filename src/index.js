import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const levels = 3;
const getUserName = msg => readlineSync.question(msg);

const play = (level, getGameData) => {
  if (level === 0) {
    return true;
  }
  const QuestionAndAnswer = getGameData();
  const question = car(QuestionAndAnswer);
  const correctAnswer = String(cdr(QuestionAndAnswer));
  const userAnswer = readlineSync.question(`Question: ${question} `);
  console.log(`Your answer: ${userAnswer}`);
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return play(level - 1, getGameData);
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
};

export default (description, taskWithSolution) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${description} \n`);
  const userName = getUserName('May I have your name? ');
  console.log(`Hello, ${userName}! \n`);
  const resultGame = play(levels, taskWithSolution);
  if (resultGame) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
};
