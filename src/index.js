import readlineSync from 'readline-sync';

export default (rules) => {
  console.log('Welcome to the Brain Games!');
  console.log(rules);
  const userName = (msg => readlineSync.question(msg))('May I have your name? ');
  console.log(`Hello, ${userName}! \n`);
  return userName;
};
