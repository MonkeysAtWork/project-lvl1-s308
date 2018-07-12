import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games! \n');
  const userName = (msg => readlineSync.question(msg))('May I have your name? ');
  console.log(`Hello, ${userName}! \n`);
};
