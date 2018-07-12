import readlineSync from 'readline-sync';
import getUserName from '.';

const rules = 'Answer "yes" if number even otherwise answer "no" \n';
const getTask = () => Math.floor(Math.random() * 100);

const play = (levels, userName) => {
  if (levels === 0) {
    console.log(`Congratulations, ${userName}!`);
    return true;
  }
  const task = getTask();
  const userAnswer = readlineSync.question(`question: ${task} `);
  console.log(`Your answer: ${userAnswer}`);
  const correctAnswer = task % 2 === 0 ? 'yes' : 'no';
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return play(levels - 1, userName);
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${userName}!`);
  return false;
};

export default levels => play(levels, getUserName(rules));
