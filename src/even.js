import readlineSync from 'readline-sync';

const levels = 3;

const getUsername = msg => readlineSync.question(msg);
const getTask = () => Math.floor(Math.random() * 100);
const isEven = number => number % 2 === 0;

const play = (level) => {
  if (level === 0) {
    return true;
  }
  const task = getTask();
  const userAnswer = readlineSync.question(`question: ${task} `);
  console.log(`Your answer: ${userAnswer}`);
  const correctAnswer = isEven(task) ? 'yes' : 'no';
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return play(level - 1);
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
};

export default () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no" \n');
  const userName = getUsername('May I have your name? ');
  console.log(`Hello, ${userName}! \n`);
  const winGame = play(levels);
  if (winGame) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
};
