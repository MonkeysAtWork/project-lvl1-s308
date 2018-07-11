import { getAnswer } from '.';
import random from './random';

const isEven = num => num % 2 === 0;

const testAnswer = (num, answer) => {
  if (answer === 'yes') {
    return isEven(num);
  } if (answer === 'no') {
    return !isEven(num);
  } return false;
};

const play = (num, count, userName) => {
  if (count === 0) {
    return console.log(`Congratulations, ${userName}!`);
  }
  const userInput = getAnswer(`question: ${num} `);
  console.log(`Your answer: ${userInput}`);
  if (testAnswer(num, userInput)) {
    console.log('Correct!');
    return play(random(count - 1), count - 1, userName);
  }
  console.log(`'${userInput}' is wrong answer ;(. Correct answer was '${isEven(num) ? 'yes' : 'no'}'.`);
  return console.log(`Let's try again, ${userName}!`);
};

export default userName => play(random(3), 3, userName);
